
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AuthLayout from "@/components/AuthLayout";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // This would be replaced with actual authentication logic
      console.log("Signing in with:", { email, password, rememberMe });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "You have been signed in successfully.",
      });
      
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-gradient">Welcome to Sonex AI</CardTitle>
        <CardDescription className="text-center text-gray-300">
          Sign in to access voice cloning & text-to-speech
        </CardDescription>
      </CardHeader>
      <CardContent>
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
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-gray-200">Password</Label>
              <Link 
                to="/forgot-password" 
                className="text-sm font-medium text-gray-300 hover:text-neon-blue neon-hover"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10 pr-10 bg-white/5 border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => 
                setRememberMe(checked === true ? true : false)
              }
              disabled={isLoading}
              className="border-white/30 data-[state=checked]:bg-neon-blue data-[state=checked]:border-neon-blue"
            />
            <Label htmlFor="remember" className="text-sm font-medium leading-none text-gray-300">
              Remember me
            </Label>
          </div>
          <Button type="submit" className="w-full generate-btn" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Login"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-center text-sm text-gray-300">
          Don't have an account?{" "}
          <Link to="/signup" className="font-medium text-gray-200 hover:text-neon-blue neon-hover">
            Register
          </Link>
        </div>
      </CardFooter>
    </AuthLayout>
  );
};

export default SignIn;
