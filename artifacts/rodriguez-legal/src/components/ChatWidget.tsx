import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, User, Bot, Phone, Mail, ChevronDown } from "lucide-react";

const API_BASE = `/api`;

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  wantsHuman?: boolean;
}

function TypingIndicator() {
  return (
    <div className="flex gap-1.5 items-center px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-accent/60"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
          transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
        isUser ? "bg-accent/20 border border-accent/30" : "bg-white/10 border border-white/15"
      }`}>
        {isUser ? <User className="w-3.5 h-3.5 text-accent" /> : <Bot className="w-3.5 h-3.5 text-white/85" />}
      </div>
      <div className={`max-w-[82%] ${isUser ? "items-end" : "items-start"} flex flex-col gap-1`}>
        <div className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-accent text-primary font-medium rounded-tr-sm"
            : "bg-white/8 text-white/85 border border-white/10 rounded-tl-sm"
        }`}>
          {msg.content}
        </div>
        {msg.wantsHuman && !isUser && (
          <div className="bg-accent/10 border border-accent/20 rounded-xl px-3 py-2 text-xs text-accent/90 mt-1">
            <p className="font-semibold mb-1">I'll route this to our team — or reach us directly:</p>
            <a href="tel:8165530595" className="flex items-center gap-1.5 hover:text-accent transition-colors mb-0.5">
              <Phone className="w-3 h-3" /> (816) 553-0595
            </a>
            <a href="mailto:info@ganttformation.com" className="flex items-center gap-1.5 hover:text-accent transition-colors break-all">
              <Mail className="w-3 h-3" /> info@ganttformation.com
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [conversationId, setConversationId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Start conversation on first open
  useEffect(() => {
    if (open && conversationId === null) {
      initConversation();
    }
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streaming]);

  const initConversation = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/chat/start`, { method: "POST" });
      if (!res.ok) throw new Error("Failed to start");
      const { conversationId: id } = await res.json();
      setConversationId(id);
      setMessages([{
        id: "welcome",
        role: "assistant",
        content: "Hi, I'm Paige — the AI intake assistant for Gantts Key Formation Group. I answer first and gather the right details, then our team reviews, supports, and finalizes everything behind the scenes. Ask me about LLC formation, EIN, online & mobile notary, process serving, pricing, or scheduling a consultation.",
      }]);
    } catch {
      setError("Could not connect. Please try again or call (816) 553-0595.");
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || streaming || !conversationId) return;

    setInput("");
    setError(null);

    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);

    const assistantId = crypto.randomUUID();
    setMessages((prev) => [...prev, { id: assistantId, role: "assistant", content: "" }]);
    setStreaming(true);

    abortRef.current = new AbortController();

    try {
      const res = await fetch(`${API_BASE}/chat/${conversationId}/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: text }),
        signal: abortRef.current.signal,
      });

      if (!res.ok || !res.body) throw new Error("Stream failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";
      let detectedHuman = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const data = JSON.parse(line.slice(6));
            if (data.content) {
              accumulated += data.content;
              setMessages((prev) =>
                prev.map((m) => m.id === assistantId ? { ...m, content: accumulated } : m)
              );
            }
            if (data.done) {
              detectedHuman = data.wantsHuman ?? false;
            }
          } catch { /* skip malformed */ }
        }
      }

      if (detectedHuman) {
        setMessages((prev) =>
          prev.map((m) => m.id === assistantId ? { ...m, wantsHuman: true } : m)
        );
      }

      if (!open) setUnread((n) => n + 1);
    } catch (err: unknown) {
      if ((err as Error).name === "AbortError") return;
      setMessages((prev) => prev.filter((m) => m.id !== assistantId));
      setError("Something went wrong. Please try again.");
    } finally {
      setStreaming(false);
    }
  }, [input, streaming, conversationId, open]);

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-primary/90 border border-white/15 backdrop-blur-sm rounded-2xl px-4 py-2.5 text-sm text-white/90 shadow-xl cursor-pointer hover:border-accent/30 hover:text-white transition-all"
              onClick={() => setOpen(true)}
            >
              Chat with Paige — 24/7 intake assistant
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setOpen((o) => !o)}
          className="relative w-14 h-14 rounded-full bg-accent text-primary shadow-2xl flex items-center justify-center hover:bg-accent/90 active:scale-95 transition-all"
          aria-label="Open chat"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
          {unread > 0 && !open && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
              {unread}
            </span>
          )}
        </button>
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[min(380px,calc(100vw-2rem))] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/12 bg-[#0d1629]"
            style={{ height: "min(560px, calc(100vh - 140px))" }}
          >
            {/* Header */}
            <div className="bg-primary/95 border-b border-white/10 px-4 py-3.5 flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center">
                <Bot className="w-4.5 h-4.5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-white font-heading">Paige · Gantts Key</div>
                <div className="text-xs text-white/70 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  AI intake assistant — answers 24/7, team reviews
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors p-1">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
              {loading && (
                <div className="flex justify-center py-8">
                  <Loader2 className="w-6 h-6 text-accent/60 animate-spin" />
                </div>
              )}

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-xs text-red-300 text-center">
                  {error}
                </div>
              )}

              {messages.map((msg) => (
                <MessageBubble key={msg.id} msg={msg} />
              ))}

              {streaming && messages[messages.length - 1]?.content === "" && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-white/85" />
                  </div>
                  <div className="bg-white/8 border border-white/10 rounded-2xl rounded-tl-sm">
                    <TypingIndicator />
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Disclaimer */}
            <div className="px-4 py-1.5 text-[10px] text-white/55 text-center border-t border-white/6 shrink-0">
              Not legal advice · For legal questions consult a licensed attorney
            </div>

            {/* Input */}
            <div className="px-3 pb-3 pt-2 border-t border-white/8 shrink-0">
              <div className="flex gap-2 items-end bg-white/6 border border-white/12 rounded-xl px-3 py-2 focus-within:border-accent/35 transition-colors">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask about our services, pricing…"
                  rows={1}
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/55 outline-none resize-none leading-relaxed max-h-28"
                  style={{ field_sizing: "content" } as React.CSSProperties}
                  disabled={streaming || loading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || streaming || loading}
                  className="w-8 h-8 rounded-lg bg-accent text-primary flex items-center justify-center shrink-0 disabled:opacity-30 hover:bg-accent/90 active:scale-95 transition-all"
                >
                  {streaming ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              <p className="text-[10px] text-white/55 text-center mt-1.5">Enter to send · Shift+Enter for new line</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
