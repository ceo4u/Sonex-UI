
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, User, Eye, EyeOff, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AuthLayout from "@/components/AuthLayout";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const validatePassword = (value: string) => {
    if (value.length < 8) {
      return "Password must be at least 8 characters";
    }
    
    const hasNumber = /\d/.test(value);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    
    if (!hasNumber || !hasSymbol) {
      return "Password must include at least one number and one symbol";
    }
    
    return "";
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const error = validatePassword(password);
    if (error) {
      setPasswordError(error);
      return;
    }
    
    if (!agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "You must agree to the Terms of Service and Privacy Policy.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // This would be replaced with actual registration logic
      console.log("Signing up with:", { name, email, password });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Account created!",
        description: "You have successfully created an account.",
      });
      
      navigate("/signin");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem creating your account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-gradient">Create an account</CardTitle>
        <CardDescription className="text-center text-gray-300">
          Join Sonex AI for advanced voice cloning & text-to-speech
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-200">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                id="name"
                placeholder="John Doe"
                className="pl-10 bg-white/5 border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
          </div>
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
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-200">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className={`pl-10 pr-10 bg-white/5 border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue ${passwordError ? "border-red-500" : ""}`}
                value={password}
                onChange={handlePasswordChange}
                required
                disabled={isLoading}
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {passwordError && (
              <div className="text-red-500 text-sm flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {passwordError}
              </div>
            )}
            <p className="text-xs text-gray-400">
              Must be at least 8 characters and include a number and symbol
            </p>
          </div>
          <div className="flex items-start space-x-2 mt-4">
            <Checkbox
              id="terms"
              checked={agreeToTerms}
              onCheckedChange={(checked) => 
                setAgreeToTerms(checked === true ? true : false)
              }
              disabled={isLoading}
              className="border-white/30 data-[state=checked]:bg-neon-blue data-[state=checked]:border-neon-blue"
            />
            <Label htmlFor="terms" className="text-sm font-medium leading-none text-gray-300">
              I agree to the{" "}
              <Link to="/terms" className="text-gray-200 hover:text-neon-blue neon-hover">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-gray-200 hover:text-neon-blue neon-hover">
                Privacy Policy
              </Link>
            </Label>
          </div>
          <Button type="submit" className="w-full generate-btn" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create Account"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link to="/signin" className="font-medium text-gray-200 hover:text-neon-blue neon-hover">
            Sign in
          </Link>
        </div>
      </CardFooter>
    </AuthLayout>
  );
};

export default SignUp;
