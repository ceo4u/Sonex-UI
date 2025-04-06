
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ErrorMessageProps {
  error: string | null;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  if (!error) return null;
  
  return (
    <Alert variant="destructive" className="mb-6 bg-red-900/20 border-red-500/50" id="error-message">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="ml-2">{error}</AlertDescription>
    </Alert>
  );
};

export default ErrorMessage;
