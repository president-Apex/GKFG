import { Link } from "wouter";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-secondary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-inner">
          <AlertCircle className="w-12 h-12 text-primary" />
        </div>
        
        <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
          404 Not Found
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link href="/">
          <Button size="lg" className="w-full sm:w-auto h-12 bg-primary hover:bg-primary/90 text-white font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
