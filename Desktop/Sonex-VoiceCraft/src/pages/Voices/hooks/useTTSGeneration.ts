
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import { synthesizeSpeech } from "@/services/apiService";

// Configuration
const MAX_CHARS = 500;

export const useTTSGeneration = () => {
  const [selectedVoice, setSelectedVoice] = useState<string | null>("1"); // Default selected
  const [text, setText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Helper function to clean up audio resources
  useEffect(() => {
    return () => {
      if (audioSrc && audioSrc.startsWith('blob:')) {
        URL.revokeObjectURL(audioSrc);
      }
    };
  }, [audioSrc]);

  // Show error message
  const showError = (message: string) => {
    setError(message);
    toast.error(`Error: ${message}`);
  };

  // Handle generating the audio
  const generateAudio = async () => {
    // Clear any previous errors
    setError(null);
    
    // Validation
    if (!text.trim()) {
      showError("Please enter some text");
      return;
    }
    
    if (text.length > MAX_CHARS) {
      showError(`Text exceeds ${MAX_CHARS} characters`);
      return;
    }

    if (!selectedVoice) {
      showError("Please select a voice");
      return;
    }

    try {
      setIsProcessing(true);
      
      // Call the synthesizeSpeech function from apiService
      const audioUrl = await synthesizeSpeech(text.trim(), parseInt(selectedVoice));
      setAudioSrc(audioUrl);
      
      // Automatically play the audio when it's loaded
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play()
            .catch(err => {
              console.error("Audio playback error:", err);
              showError("Failed to play audio. Check console for details.");
            });
        }
      }, 100);
      
      toast.success("Audio generated successfully!");

    } catch (error: any) {
      showError(error.message || "Failed to generate speech");
    } finally {
      setIsProcessing(false);
    }
  };

  return {
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
  };
};
