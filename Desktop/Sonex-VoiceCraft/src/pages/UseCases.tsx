
import NavLayout from "@/components/NavLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Video, PresentationIcon, Book, Mic, Radio, Megaphone, Accessibility, Users } from "lucide-react";

const UseCases = () => {
  return (
    <NavLayout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          Use Cases
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Discover how Sonex AI can enhance your content across various platforms and industries
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Video className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">YouTube Videos</h3>
            <p className="text-gray-300 mb-6">
              Create engaging voiceovers for your content without recording your voice. Perfect for tutorials, explainer videos, and documentaries.
            </p>
            <Button variant="outline" className="mt-auto bg-transparent border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
              Learn More
            </Button>
          </div>
          
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">TikTok Content</h3>
            <p className="text-gray-300 mb-6">
              Generate viral-worthy voice content without recording yourself. Ideal for short-form videos, voiceovers, and creative content.
            </p>
            <Button variant="outline" className="mt-auto bg-transparent border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
              Learn More
            </Button>
          </div>
          
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <PresentationIcon className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Presentations</h3>
            <p className="text-gray-300 mb-6">
              Add professional narration to your slides and enhance your presentations. Perfect for business meetings, webinars, and educational content.
            </p>
            <Button variant="outline" className="mt-auto bg-transparent border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
              Learn More
            </Button>
          </div>
          
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Book className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Audiobooks</h3>
            <p className="text-gray-300 mb-6">
              Convert your written stories into professional audiobooks without hiring voice actors. Great for authors and publishers.
            </p>
            <Button variant="outline" className="mt-auto bg-transparent border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
              Learn More
            </Button>
          </div>
          
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Mic className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Podcasts</h3>
            <p className="text-gray-300 mb-6">
              Create podcast intros, ads, or entire episodes with realistic AI voices. Perfect for podcast creators looking to scale their content.
            </p>
            <Button variant="outline" className="mt-auto bg-transparent border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
              Learn More
            </Button>
          </div>
          
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Radio className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Radio Ads</h3>
            <p className="text-gray-300 mb-6">
              Produce professional radio advertisements quickly and affordably without booking studio time or voice talent.
            </p>
            <Button variant="outline" className="mt-auto bg-transparent border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
              Learn More
            </Button>
          </div>
          
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Megaphone className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Marketing</h3>
            <p className="text-gray-300 mb-6">
              Create promotional content, explainer videos, and marketing materials with consistent voice branding across all channels.
            </p>
            <Button variant="outline" className="mt-auto bg-transparent border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
              Learn More
            </Button>
          </div>
          
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Accessibility className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">Accessibility</h3>
            <p className="text-gray-300 mb-6">
              Make your content more accessible by adding audio versions of written content for visually impaired users.
            </p>
            <Button variant="outline" className="mt-auto bg-transparent border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
              Learn More
            </Button>
          </div>
          
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-deep-purple/20 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">E-Learning</h3>
            <p className="text-gray-300 mb-6">
              Create engaging educational content with clear, professional narration for online courses, tutorials, and training materials.
            </p>
            <Button variant="outline" className="mt-auto bg-transparent border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="generate-btn px-8 py-6 text-lg" asChild>
            <Link to="/voices">Try Sonex AI Now</Link>
          </Button>
        </div>
      </div>
    </NavLayout>
  );
};

export default UseCases;
