
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import { cloneVoice, downloadAudio } from "@/services/apiService";

// Configuration
const MAX_CHARS = 500;

export const useVoiceCloning = () => {
  // State
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("en");
  const [voiceSample, setVoiceSample] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Refs
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Cleanup audio resources on unmount
  useEffect(() => {
    return () => {
      if (audioSrc && audioSrc.startsWith('blob:')) {
        URL.revokeObjectURL(audioSrc);
      }
    };
  }, [audioSrc]);

  // Set up audio element event listeners
  useEffect(() => {
    if (audioRef.current) {
      const audioElement = audioRef.current;
      
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => setIsPlaying(false);
      
      audioElement.addEventListener('play', handlePlay);
      audioElement.addEventListener('pause', handlePause);
      audioElement.addEventListener('ended', handleEnded);
      
      return () => {
        audioElement.removeEventListener('play', handlePlay);
        audioElement.removeEventListener('pause', handlePause);
        audioElement.removeEventListener('ended', handleEnded);
      };
    }
  }, [audioRef.current]);

  // Generate audio with cloned voice
  const generateAudio = async () => {
    // Validation
    if (!text.trim()) {
      toast.error("Please enter some text to convert");
      return;
    }
    
    if (text.length > MAX_CHARS) {
      toast.error(`Text exceeds ${MAX_CHARS} characters`);
      return;
    }

    if (!voiceSample) {
      toast.error("Please upload a voice sample");
      return;
    }

    try {
      setIsProcessing(true);
      
      const formData = new FormData();
      formData.append("audio", voiceSample);
      formData.append("text", text.trim());
      formData.append("language", language);

      const result = await cloneVoice(formData);
      
      if (result && result.filename) {
        // Get the URL for the generated audio file
        const audioUrl = downloadAudio(result.filename);
        setAudioSrc(audioUrl);
        toast.success("Voice cloning completed successfully!");
      } else {
        throw new Error('No audio filename received from the API');
      }
      
    } catch (error: any) {
      toast.error(`Error: ${error.message || "Failed to generate audio"}`);
    } finally {
      setIsProcessing(false);
    }
  };

  // Toggle audio playback
  const togglePlayback = () => {
    if (!audioRef.current || !audioSrc) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  // Download the generated audio
  const handleDownloadAudio = () => {
    if (!audioSrc) return;
    
    // Create a download link for the audio file
    const link = document.createElement('a');
    link.href = audioSrc;
    link.download = `cloned-voice-${new Date().getTime()}.wav`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Audio file downloaded successfully!");
  };

  return {
    text,
    setText,
    language,
    setLanguage,
    voiceSample,
    setVoiceSample,
    isProcessing,
    audioSrc,
    audioRef,
    isPlaying,
    generateAudio,
    togglePlayback,
    downloadAudio: handleDownloadAudio,
    MAX_CHARS
  };
};
