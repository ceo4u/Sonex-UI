
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mic } from "lucide-react";

interface NavLayoutProps {
  children: ReactNode;
}

const NavLayout = ({ children }: NavLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 backdrop-blur-md bg-black/80">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center text-2xl font-bold text-white">
            <span className="text-gradient">Sonex AI</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-sm text-gray-300 uppercase tracking-wide hover:text-neon-blue neon-hover">
              Features
            </Link>
            <Link to="/voices" className="text-sm text-gray-300 uppercase tracking-wide hover:text-neon-blue neon-hover">
              Voices
            </Link>
            <Link to="/voice-cloning" className="text-sm text-gray-300 uppercase tracking-wide hover:text-neon-blue neon-hover">
              Voice Cloning
            </Link>
            <Link to="/how-to-use" className="text-sm text-gray-300 uppercase tracking-wide hover:text-neon-blue neon-hover">
              How to Use
            </Link>
            <Link to="/use-cases" className="text-sm text-gray-300 uppercase tracking-wide hover:text-neon-blue neon-hover">
              Use Cases
            </Link>
            <Link to="/faqs" className="text-sm text-gray-300 uppercase tracking-wide hover:text-neon-blue neon-hover">
              FAQs
            </Link>
            <Link to="/contact" className="text-sm text-gray-300 uppercase tracking-wide hover:text-neon-blue neon-hover">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="rounded-md bg-black border-white/10 text-white hover:bg-black/90" asChild>
              <Link to="/signin">Log In</Link>
            </Button>
            <Button className="rounded-md bg-neon-blue text-white hover:bg-neon-blue/90" asChild>
              <Link to="/signup">TRY FOR FREE</Link>
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Main content */}
      <main className="flex-1 bg-black">
        {children}
      </main>
    </div>
  );
};

export default NavLayout;
