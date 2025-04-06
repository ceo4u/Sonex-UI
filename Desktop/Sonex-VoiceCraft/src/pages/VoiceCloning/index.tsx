
import { useState, useRef } from "react";
import NavLayout from "@/components/NavLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Upload, 
  ArrowRight, 
  Play, 
  Pause, 
  Settings, 
  Download,
  Import
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import VoiceSampleUploader from "./components/VoiceSampleUploader";
import AudioTimeline from "./components/AudioTimeline";
import { useVoiceCloning } from "./hooks/useVoiceCloning";

const VoiceCloning = () => {
  const {
    text,
    setText,
    language,
    setLanguage,
    isProcessing,
    voiceSample,
    setVoiceSample,
    audioSrc,
    generateAudio,
    isPlaying,
    togglePlayback,
    downloadAudio,
    MAX_CHARS
  } = useVoiceCloning();

  return (
    <NavLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          I Voice Cloning
        </h1>
        
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Effortlessly create lifelike voice replicas in seconds. Simply provide a short sample to clone any voice and generate studio-quality speech. Download your audio creations for free.
        </p>
        
        {/* Text Input Section */}
        <div className="glass-card mb-12">
          <h2 className="text-xl font-semibold mb-4 text-neon-blue">Enter Text</h2>
          <Textarea 
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-40 p-4 bg-black/50 border border-white/10 rounded-lg text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue resize-none"
            placeholder="Enter the text you'd like to convert to speech..."
            maxLength={MAX_CHARS}
            id="tts-input"
          />
          <div className="flex justify-end mt-2">
            <span className={`text-sm ${text.length > MAX_CHARS ? 'text-red-500' : 'text-gray-400'}`}>
              Characters: {text.length}/{MAX_CHARS}
            </span>
          </div>
        </div>
        
        {/* Voice Sample Upload Section */}
        <div className="glass-card mb-12">
          <h2 className="text-xl font-semibold mb-4 text-neon-blue">Voice Sample</h2>
          <VoiceSampleUploader onSampleUploaded={setVoiceSample} sample={voiceSample} />
        </div>
        
        {/* Language Selection */}
        <div className="glass-card mb-12">
          <h2 className="text-xl font-semibold mb-4 text-neon-blue">Language Settings</h2>
          <div className="mb-4">
            <Label htmlFor="language-select" className="block text-white mb-2">Select Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-full bg-black/50 border-white/10 text-white">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent className="bg-black border-white/10">
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="it">Italian</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
                <SelectItem value="ko">Korean</SelectItem>
                <SelectItem value="zh">Chinese</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Generate Button */}
        <div className="flex justify-center mb-12">
          <Button 
            size="lg" 
            className="generate-btn px-10 py-6 text-lg font-bold"
            disabled={isProcessing || !text.trim() || !voiceSample}
            onClick={() => generateAudio()}
          >
            {isProcessing ? 
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                PROCESSING...
              </span>
              : 
              <span className="flex items-center gap-2">
                CONVERT TO SPEECH <ArrowRight className="ml-2" />
              </span>
            }
          </Button>
        </div>
        
        {/* Audio Timeline Editor */}
        {audioSrc && (
          <>
            <div className="glass-card mb-12">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-neon-blue">Audio Timeline</h2>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-black/50 border-white/10 text-white hover:bg-black/90"
                    onClick={togglePlayback}
                  >
                    {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                    {isPlaying ? "Pause" : "Play"}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-black/50 border-white/10 text-white hover:bg-black/90"
                  >
                    <Import className="mr-2 h-4 w-4" />
                    Import
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-black/50 border-white/10 text-white hover:bg-black/90"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </div>
              </div>
              <AudioTimeline 
                audioSrc={audioSrc} 
                isPlaying={isPlaying} 
                onPlayPause={togglePlayback} 
              />
            </div>
            
            {/* Download Button */}
            <div className="flex justify-center mb-12">
              <Button 
                className="bg-neon-blue hover:bg-neon-blue/90 text-white px-10 py-6 text-lg font-bold"
                onClick={() => downloadAudio()}
              >
                <Download className="mr-2 h-5 w-5" /> DOWNLOAD AUDIO
              </Button>
            </div>
          </>
        )}
      </div>
    </NavLayout>
  );
};

export default VoiceCloning;
