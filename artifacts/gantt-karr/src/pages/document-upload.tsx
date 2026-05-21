import { useState, useRef, useCallback } from "react";
import { SEO } from "@/components/seo";
import { webPageSchema, breadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Disclaimer } from "@/components/disclaimer";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { Shield, Upload, FileText, X, Lock, CheckCircle } from "lucide-react";

const ACCEPTED_TYPES = [".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png"];
const ACCEPTED_MIME = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
];
const MAX_FILE_SIZE_MB = 10;
const MAX_FILES = 5;

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function DocumentUpload() {
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [consentAcknowledged, setConsentAcknowledged] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const addFiles = useCallback((incoming: FileList | File[]) => {
    const arr = Array.from(incoming);
    const valid = arr.filter((f) => {
      if (!ACCEPTED_MIME.includes(f.type)) {
        toast({ title: "Unsupported file type", description: `${f.name} is not a supported file type.`, variant: "destructive" });
        return false;
      }
      if (f.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        toast({ title: "File too large", description: `${f.name} exceeds the ${MAX_FILE_SIZE_MB}MB limit.`, variant: "destructive" });
        return false;
      }
      return true;
    });

    setFiles((prev) => {
      const combined = [...prev, ...valid];
      if (combined.length > MAX_FILES) {
        toast({ title: "Too many files", description: `Maximum ${MAX_FILES} files per submission.`, variant: "destructive" });
        return combined.slice(0, MAX_FILES);
      }
      return combined;
    });
  }, [toast]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(e.target.files);
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentAcknowledged) return;
    if (files.length === 0) {
      toast({ title: "No files selected", description: "Please attach at least one document.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({
      title: "Documents Submitted",
      description: "Your documents have been received. A team member will review and follow up with you shortly.",
    });
  };

  return (
    <>
      <SEO
        title="Secure Document Submission | Gantt & Karr Formation Group"
        description="Securely submit documents to Gantt & Karr Formation Group for business formation, notary, or compliance services. Encrypted file transfer — no email attachments needed."
        schema={[
          webPageSchema({
            url: "/documents",
            name: "Secure Document Submission | Gantt & Karr Formation Group",
            description: "Securely submit documents to Gantt & Karr Formation Group for your active service engagement.",
            breadcrumbItems: [{ name: "Document Submission", href: "/documents" }],
          }),
          breadcrumbSchema([{ name: "Document Submission", href: "/documents" }]),
        ]}
      />

      <div className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
              <Shield className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Secure Document Submission</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Submit documents securely to our team for your active service engagement.
            No email attachments needed.
          </p>
        </div>
      </div>

      {/* Security trust bar */}
      <div className="bg-secondary/10 border-b border-secondary/20 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-semibold text-foreground/70 uppercase tracking-wider">
            {["Encrypted Transmission", "Files Handled Confidentially", "No Unauthorized Sharing", "Retained Only as Needed"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <Lock className="h-3 w-3 text-secondary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-secondary/15 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">Documents Received</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
                Thank you. Your submission has been received securely. A member of our team will
                review your documents and follow up with you at the contact information you provided.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/consultation">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Book a Consultation
                  </Button>
                </Link>
                <Button variant="outline" onClick={() => { setSubmitted(false); setFiles([]); setConsentAcknowledged(false); }}>
                  Submit More Documents
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-2xl font-serif font-bold mb-2 text-primary">Submit Your Documents</h2>
              <p className="text-sm text-muted-foreground mb-8">
                Use this form to securely send documents related to your active service with Gantt & Karr Formation Group.
                If you don't yet have an active service engagement, please{" "}
                <Link href="/consultation" className="text-secondary hover:underline">book a consultation first</Link>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Client info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name *</label>
                    <Input required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name *</label>
                    <Input required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address *</label>
                  <Input type="email" required placeholder="The email you used to book your service" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Business Name <span className="text-muted-foreground font-normal">(if applicable)</span></label>
                  <Input placeholder="e.g. Apex Consulting LLC" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Service Type *</label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your active service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="llc">LLC Formation Assistance</SelectItem>
                      <SelectItem value="corp">Corporation Filing Assistance</SelectItem>
                      <SelectItem value="ein">EIN Application Assistance</SelectItem>
                      <SelectItem value="registered-agent">Registered Agent Services</SelectItem>
                      <SelectItem value="boi">BOI Reporting Assistance</SelectItem>
                      <SelectItem value="notary-online">Online Notary Services</SelectItem>
                      <SelectItem value="notary-mobile">Mobile Notary Services</SelectItem>
                      <SelectItem value="loan-signing">Loan Signing</SelectItem>
                      <SelectItem value="other">Other / General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Reference / Notes <span className="text-muted-foreground font-normal">(optional)</span></label>
                  <Input placeholder="e.g. Client ID, appointment date, or special instructions" />
                </div>

                {/* File Upload Area */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">
                    Attach Documents * <span className="text-muted-foreground font-normal ml-1">Max {MAX_FILES} files, {MAX_FILE_SIZE_MB}MB each</span>
                  </label>

                  <div
                    onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={handleDrop}
                    onClick={() => inputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                      dragging
                        ? "border-secondary bg-secondary/10"
                        : "border-border hover:border-secondary/50 hover:bg-muted/30"
                    }`}
                  >
                    <Upload className={`h-8 w-8 mx-auto mb-3 transition-colors ${dragging ? "text-secondary" : "text-muted-foreground"}`} />
                    <p className="text-sm font-medium text-foreground mb-1">
                      {dragging ? "Drop files here" : "Drag & drop files here"}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">or click to browse</p>
                    <p className="text-xs text-muted-foreground">
                      Accepted: PDF, DOC, DOCX, JPG, PNG
                    </p>
                    <input
                      ref={inputRef}
                      type="file"
                      multiple
                      accept={ACCEPTED_TYPES.join(",")}
                      onChange={handleFileInput}
                      className="hidden"
                    />
                  </div>

                  {/* File list */}
                  {files.length > 0 && (
                    <ul className="space-y-2">
                      {files.map((file, i) => (
                        <li key={i} className="flex items-center gap-3 bg-muted/40 border border-border rounded-lg px-4 py-2.5">
                          <FileText className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-foreground flex-1 truncate">{file.name}</span>
                          <span className="text-xs text-muted-foreground flex-shrink-0">{formatBytes(file.size)}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(i)}
                            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                            aria-label="Remove file"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Consent */}
                <div className="border border-border rounded-xl p-4 space-y-4 bg-muted/30">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Acknowledgment</p>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={consentAcknowledged}
                      onChange={(e) => setConsentAcknowledged(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-border accent-primary flex-shrink-0"
                      required
                    />
                    <span className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      <strong className="text-foreground">Required:</strong> I confirm that I have the right to share the documents I am submitting, and I authorize Gantt & Karr Formation Group to use these documents solely for the purpose of fulfilling my requested service. I have read and agree to the{" "}
                      <Link href="/terms-of-service" className="text-secondary hover:underline">Terms of Service</Link>{" "}
                      and{" "}
                      <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>.
                    </span>
                  </label>
                </div>

                <div className="bg-muted/40 border border-border rounded-xl p-4 flex items-start gap-3">
                  <Lock className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Your privacy matters.</strong> Documents submitted through this portal are transmitted securely and handled confidentially. We retain files only as long as necessary to complete your service and do not share them with unauthorized third parties.
                    See our <Link href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={!consentAcknowledged || files.length === 0}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-13 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Submit Documents Securely
                </Button>

                {(!consentAcknowledged || files.length === 0) && (
                  <p className="text-xs text-muted-foreground text-center">
                    {files.length === 0 ? "Attach at least one document to continue." : "Please check the required acknowledgment box to submit."}
                  </p>
                )}
              </form>
            </div>
          )}

          <div className="mt-10">
            <Disclaimer />
          </div>
        </div>
      </section>
    </>
  );
}
