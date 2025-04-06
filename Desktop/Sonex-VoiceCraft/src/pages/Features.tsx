
import NavLayout from "@/components/NavLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Globe, Zap, Clock, Lock, Headphones, Music, Settings, Save, FileText } from "lucide-react";

const Features = () => {
  return (
    <NavLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          Features
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Explore the powerful capabilities of Sonex AI's voice cloning and text-to-speech technology
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-8">
            <div className="w-12 h-12 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="h-6 w-6 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Ultra-Realistic Voices</h3>
            <p className="text-gray-300">
              Our advanced AI technology produces human-like speech with natural intonation, emphasis, and emotion. Listeners won't be able to tell it's AI-generated.
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="w-12 h-12 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Globe className="h-6 w-6 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">50+ Languages & Accents</h3>
            <p className="text-gray-300">
              Generate speech in over 50 languages and regional accents, making your content accessible to a global audience with authentic localization.
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="w-12 h-12 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Instant Processing</h3>
            <p className="text-gray-300">
              Generate high-quality voice content in seconds with our lightning-fast AI engine. No more waiting for renders or processing time.
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="w-12 h-12 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Clock className="h-6 w-6 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Voice Customization</h3>
            <p className="text-gray-300">
              Adjust speaking rate, pitch, and emphasis to get the perfect delivery for your content. Fine-tune voices to match your exact requirements.
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="w-12 h-12 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Lock className="h-6 w-6 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">100% Secure</h3>
            <p className="text-gray-300">
              Your data is never stored permanently. We prioritize your privacy with military-grade security and data protection measures.
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="w-12 h-12 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Headphones className="h-6 w-6 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Voice Cloning</h3>
            <p className="text-gray-300">
              Clone your own voice or create a custom voice for your brand with just a few minutes of sample audio. Maintain consistency across all your content.
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="w-12 h-12 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Music className="h-6 w-6 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Background Music Integration</h3>
            <p className="text-gray-300">
              Add background music and sound effects to your voice recordings directly in our platform, creating complete audio productions.
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="w-12 h-12 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Settings className="h-6 w-6 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">API Integration</h3>
            <p className="text-gray-300">
              Integrate Sonex AI directly into your applications, websites, or workflows with our developer-friendly API. Automate voice generation at scale.
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="w-12 h-12 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Save className="h-6 w-6 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Multiple Export Formats</h3>
            <p className="text-gray-300">
              Download your generated audio in various formats including MP3, WAV, OGG, and FLAC to suit your specific needs and platforms.
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="w-12 h-12 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <FileText className="h-6 w-6 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">SSML Support</h3>
            <p className="text-gray-300">
              Use Speech Synthesis Markup Language (SSML) to have granular control over pronunciation, pauses, emphasis, and other speech characteristics.
            </p>
          </div>
          
          <div className="glass-card p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-bold mb-4 text-white">Ready to try Sonex AI?</h3>
            <p className="text-gray-300 mb-6">
              Experience the future of voice technology today.
            </p>
            <Button className="generate-btn" asChild>
              <Link to="/voices">Get Started Free</Link>
            </Button>
          </div>
        </div>
        
        <div className="glass-card p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            Premium Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Commercial Usage Rights</h3>
                <p className="text-gray-300">
                  Use generated audio in commercial projects, advertisements, and monetized content with full legal rights.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Unlimited Characters</h3>
                <p className="text-gray-300">
                  No character limits for your text-to-speech conversions. Generate audio of any length.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Priority Processing</h3>
                <p className="text-gray-300">
                  Get faster processing times and priority access to our servers during peak usage periods.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Custom Voice Cloning</h3>
                <p className="text-gray-300">
                  Create custom AI voices based on your own voice or specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="generate-btn px-8 py-6 text-lg" asChild>
            <Link to="/signup">Try Sonex AI For Free</Link>
          </Button>
        </div>
      </div>
    </NavLayout>
  );
};

export default Features;
