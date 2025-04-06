
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-deep-purple/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl"></div>
      </div>
      
      {/* Logo */}
      <div className="mb-8 z-10">
        <Link to="/" className="text-3xl font-bold text-gradient">
          Sonex AI
        </Link>
      </div>
      
      <div className="w-full max-w-md z-10">
        <div className="glass-card border border-white/5 shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
