
import VoiceCard from "./VoiceCard";
import { Voice } from "../types";

interface VoiceGridProps {
  voices: Voice[];
  selectedVoice: string | null;
  selectVoice: (voiceId: string) => void;
  search: string;
}

const VoiceGrid = ({ voices, selectedVoice, selectVoice, search }: VoiceGridProps) => {
  const filteredVoices = voices.filter(voice => 
    voice.name.toLowerCase().includes(search.toLowerCase()) ||
    voice.language.toLowerCase().includes(search.toLowerCase()) ||
    voice.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredVoices.map((voice) => (
        <VoiceCard 
          key={voice.id}
          voice={voice}
          isSelected={selectedVoice === voice.id}
          onSelect={selectVoice}
        />
      ))}
    </div>
  );
};

export default VoiceGrid;
