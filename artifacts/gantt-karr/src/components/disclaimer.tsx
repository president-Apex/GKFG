export function Disclaimer({ notice }: { notice?: string }) {
  return (
    <div className="bg-muted p-6 rounded-lg text-sm text-muted-foreground mt-8 mb-4 border border-border space-y-2">
      {notice && (
        <p className="font-semibold text-foreground/80">
          <strong>Important:</strong> {notice}
        </p>
      )}
      <p>
        Gantt Key Formation Group is not a law firm and does not provide legal advice, legal representation, tax advice, accounting advice, or financial advice. Information provided is for general informational and administrative purposes only.
      </p>
    </div>
  );
}
