
import NavLayout from "@/components/NavLayout";
import { Mic, Type, Download } from "lucide-react";

const HowToUse = () => {
  return (
    <NavLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          How It Works
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Generate high-quality AI-powered voice audio in just three simple steps
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-neon-blue rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
              1
            </div>
            <div className="glass-card w-full h-48 flex items-center justify-center mb-6">
              <Type className="h-20 w-20 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Enter Your Text</h3>
            <p className="text-gray-300">
              Type or paste up to 2000 characters of text that you want to convert to speech.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-neon-blue rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
              2
            </div>
            <div className="glass-card w-full h-48 flex items-center justify-center mb-6">
              <Mic className="h-20 w-20 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Choose a Voice</h3>
            <p className="text-gray-300">
              Browse and select from our wide range of voices in different languages and accents.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-neon-blue rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
              3
            </div>
            <div className="glass-card w-full h-48 flex items-center justify-center mb-6">
              <Download className="h-20 w-20 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Generate & Download</h3>
            <p className="text-gray-300">
              Click the generate button and download your high-quality audio file instantly.
            </p>
          </div>
        </div>
        
        <div className="glass-card p-8 mb-20">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Tips for Best Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-neon-blue font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Use proper punctuation</h3>
                <p className="text-gray-300">
                  Include commas, periods, and question marks to create natural speech patterns and pauses.
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-neon-blue font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Test different voices</h3>
                <p className="text-gray-300">
                  Try several voices to find the one that best matches the tone and style of your content.
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-neon-blue font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Break long text into sections</h3>
                <p className="text-gray-300">
                  For lengthy content, generate multiple audio clips and combine them for better results.
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-neon-blue font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-white">Spell out numbers and abbreviations</h3>
                <p className="text-gray-300">
                  Write "twenty-five" instead of "25" for more natural pronunciation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavLayout>
  );
};

export default HowToUse;
