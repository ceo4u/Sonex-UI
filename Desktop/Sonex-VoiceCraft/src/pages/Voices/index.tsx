
import { useState } from "react";
import NavLayout from "@/components/NavLayout";
import { voices } from "./data/voicesData";
import { useTTSGeneration } from "./hooks/useTTSGeneration";

// Components
import TextInput from "./components/TextInput";
import SearchVoices from "./components/SearchVoices";
import VoiceGrid from "./components/VoiceGrid";
import ErrorMessage from "./components/ErrorMessage";
import LoadingSpinner from "./components/LoadingSpinner";
import AudioPlayer from "./components/AudioPlayer";
import GenerateButton from "./components/GenerateButton";

const Voices = () => {
  const [search, setSearch] = useState("");
  
  const {
    selectedVoice,
    setSelectedVoice,
    text,
    setText,
    isProcessing,
    audioSrc,
    audioRef,
    error,
    generateAudio,
    MAX_CHARS
  } = useTTSGeneration();

  const selectVoice = (voiceId: string) => {
    setSelectedVoice(voiceId);
  };

  const handleGenerateAudio = () => {
    if (!selectedVoice) return;
    generateAudio();
  };

  return (
    <NavLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          AI Voice Generator
        </h1>
        
        {/* Text Input Section */}
        <TextInput text={text} setText={setText} maxChars={MAX_CHARS} />
        
        {/* Voice Selection Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-neon-blue">Select Voice</h2>
          
          {/* Search and Filters */}
          <SearchVoices search={search} setSearch={setSearch} />
          
          {/* Voice Grid */}
          <VoiceGrid 
            voices={voices}
            selectedVoice={selectedVoice}
            selectVoice={selectVoice}
            search={search}
          />
        </div>
        
        {/* Error Alert */}
        <ErrorMessage error={error} />
        
        {/* Loading Spinner */}
        <LoadingSpinner isProcessing={isProcessing} />
        
        {/* Audio Player */}
        <AudioPlayer audioSrc={audioSrc} audioRef={audioRef} />
        
        {/* Generate Button */}
        <GenerateButton 
          isProcessing={isProcessing} 
          isDisabled={!selectedVoice || !text.trim()} 
          onClick={handleGenerateAudio} 
        />
      </div>
    </NavLayout>
  );
};

export default Voices;
