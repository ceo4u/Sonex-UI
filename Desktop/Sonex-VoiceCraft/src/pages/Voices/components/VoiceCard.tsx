
import { Mic, Globe, MapPin } from "lucide-react";
import { Voice } from "../types";

interface VoiceCardProps {
  voice: Voice;
  isSelected: boolean;
  onSelect: (voiceId: string) => void;
}

const VoiceCard = ({ voice, isSelected, onSelect }: VoiceCardProps) => {
  return (
    <div 
      className={`glass-card p-4 flex items-center space-x-4 cursor-pointer transition-all ${
        isSelected ? 'border-neon-blue shadow-lg shadow-neon-blue/10' : 'border-white/10'
      }`}
      onClick={() => onSelect(voice.id)}
    >
      <div className="w-12 h-12 rounded-full bg-deep-purple/20 flex items-center justify-center">
        <Mic className="h-6 w-6 text-neon-blue" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium text-white">{voice.name}</h3>
        <div className="flex flex-wrap items-center mt-1 gap-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-black/70 text-gray-300">
            {voice.gender}
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-black/70 text-gray-300">
            <Globe className="mr-1 h-3 w-3" /> {voice.language}
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-black/70 text-gray-300">
            <MapPin className="mr-1 h-3 w-3" /> {voice.country}
          </span>
        </div>
      </div>
      {isSelected && (
        <div className="w-6 h-6 rounded-full bg-neon-blue flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default VoiceCard;
