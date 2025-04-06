
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AuthLayout from "@/components/AuthLayout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // This would be replaced with actual password reset logic
      console.log("Resetting password for:", email);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      
      toast({
        title: "Reset email sent",
        description: "Check your inbox for password reset instructions.",
      });
      
      // Auto-redirect to login after submission (with a delay)
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending the reset email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-gradient">Reset password</CardTitle>
        <CardDescription className="text-center text-gray-300">
          {!isSubmitted 
            ? "Enter your email address and we'll send you a link to reset your password" 
            : "Check your email for a link to reset your password"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="pl-10 bg-white/5 border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>
            <Button type="submit" className="w-full generate-btn" disabled={isLoading}>
              {isLoading ? "Sending..." : "Reset Password"}
            </Button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <div className="bg-neon-blue/10 p-4 rounded-lg border border-neon-blue/20 text-gray-200">
              We've sent a password reset link to <strong>{email}</strong>
            </div>
            <p className="text-sm text-gray-400">
              You will be redirected to the login page in a few seconds.
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-center text-sm">
          <Link to="/signin" className="inline-flex items-center font-medium text-gray-300 hover:text-neon-blue neon-hover">
            <ArrowRight className="mr-1 h-4 w-4" />
            Back to sign in
          </Link>
        </div>
      </CardFooter>
    </AuthLayout>
  );
};

export default ForgotPassword;
