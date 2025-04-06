
import { useState } from "react";
import NavLayout from "@/components/NavLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Twitter, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // This would be replaced with actual form submission logic
      console.log("Submitting contact form:", { name, email, subject, message });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon.",
      });
      
      // Clear form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <NavLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Connect With Us
        </h1>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card flex flex-col items-center text-center p-8">
            <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Email</h3>
            <a href="mailto:contact@sonexai.com" className="text-gray-300 hover:text-neon-blue transition-colors">
              contact@sonexai.com
            </a>
          </div>
          
          <div className="glass-card flex flex-col items-center text-center p-8">
            <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Twitter className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Twitter</h3>
            <a href="https://twitter.com/SonexAI" className="text-gray-300 hover:text-neon-blue transition-colors">
              @SonexAI
            </a>
          </div>
          
          <div className="glass-card flex flex-col items-center text-center p-8">
            <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Youtube className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">YouTube</h3>
            <a href="https://youtube.com/SonexAI" className="text-gray-300 hover:text-neon-blue transition-colors">
              @SonexAI
            </a>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="max-w-3xl mx-auto glass-card">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-200">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-white/5 border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-white/5 border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-gray-200">Subject</Label>
              <Input
                id="subject"
                placeholder="What is your message about?"
                className="bg-white/5 border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-200">Message</Label>
              <textarea
                id="message"
                rows={6}
                placeholder="Type your message here..."
                className="w-full p-3 bg-white/5 border border-white/10 rounded-md text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="flex justify-center">
              <Button 
                type="submit" 
                className="generate-btn px-8 py-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </NavLayout>
  );
};

export default Contact;
