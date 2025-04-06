
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavLayout from "@/components/NavLayout";
import { Mic } from "lucide-react";

const Index = () => {
  return (
    <NavLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 min-h-[calc(100vh-4rem)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-deep-purple/20 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-blue/10 blur-3xl"></div>
          {/* Wave effect at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0e1b4d]/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path fill="#0e1b4d" fillOpacity="0.6" d="M0,96L48,101.3C96,107,192,117,288,144C384,171,480,213,576,213.3C672,213,768,171,864,170.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-deep-purple bg-clip-text text-transparent">
            Create Realistic AI Voices in Seconds
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Advanced voice cloning & text-to-speech technology powered by artificial
            intelligence. Generate natural-sounding speech instantly with our cutting-edge
            platform.
          </p>
          
          <Button size="lg" className="rounded-md bg-neon-blue text-white hover:bg-neon-blue/90 shadow-lg shadow-neon-blue/20 px-8 py-6 text-lg" asChild>
            <Link to="/voices">
              <Mic className="mr-2 h-5 w-5" />
              TRY OUR AI VOICE CLONING
            </Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Sonex AI */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Why Choose Sonex AI?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
                <Mic className="h-8 w-8 text-neon-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Ultra-Realistic Voices</h3>
              <p className="text-gray-300">
                Create your digital voice twin with our advanced AI
                technology that produces human-like speech.
              </p>
            </div>
            
            <div className="glass-card flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Instant Processing</h3>
              <p className="text-gray-300">
                Generate high-quality voice content in seconds with
                our lightning-fast AI engine.
              </p>
            </div>
            
            <div className="glass-card flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">100% Secure</h3>
              <p className="text-gray-300">
                Your data is never stored permanently. We prioritize
                your privacy with military-grade security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card flex flex-col items-center text-center p-8">
              <div className="w-12 h-12 bg-neon-blue rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Enter Your Text</h3>
              <p className="text-gray-300">
                Type or paste your text into the input field. Up to 2000
                characters supported.
              </p>
            </div>
            
            <div className="glass-card flex flex-col items-center text-center p-8">
              <div className="w-12 h-12 bg-neon-blue rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Choose a Voice</h3>
              <p className="text-gray-300">
                Select from our collection of 50+ premium voices in
                multiple languages and accents.
              </p>
            </div>
            
            <div className="glass-card flex flex-col items-center text-center p-8">
              <div className="w-12 h-12 bg-neon-blue rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Generate Audio</h3>
              <p className="text-gray-300">
                Click generate and download your high-quality AI-
                generated audio file instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Use Cases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">YouTube Videos</h3>
              <p className="text-gray-300">
                Create engaging voiceovers for your content without
                recording your voice.
              </p>
            </div>
            
            <div className="glass-card flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">TikTok Content</h3>
              <p className="text-gray-300">
                Generate viral-worthy voice content without recording
                yourself.
              </p>
            </div>
            
            <div className="glass-card flex flex-col items-center text-center p-8">
              <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Presentations</h3>
              <p className="text-gray-300">
                Add professional narration to your slides and enhance
                your presentations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </NavLayout>
  );
};

export default Index;
