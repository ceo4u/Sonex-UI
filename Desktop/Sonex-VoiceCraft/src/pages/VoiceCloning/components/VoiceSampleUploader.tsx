
import React, { useRef, useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoiceSampleUploaderProps {
  onSampleUploaded: (file: File | null) => void;
  sample: File | null;
}

const VoiceSampleUploader: React.FC<VoiceSampleUploaderProps> = ({ onSampleUploaded, sample }) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (isValidAudioFile(file)) {
        onSampleUploaded(file);
      } else {
        alert("Please upload an MP3 or WAV file.");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (isValidAudioFile(file)) {
        onSampleUploaded(file);
      } else {
        alert("Please upload an MP3 or WAV file.");
      }
    }
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const isValidAudioFile = (file: File): boolean => {
    return file.type === "audio/mpeg" || file.type === "audio/wav" || file.type === "audio/x-wav";
  };

  return (
    <div 
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
        dragActive ? "border-neon-blue bg-neon-blue/5" : "border-white/10 bg-black/20"
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept="audio/mpeg,audio/wav"
        onChange={handleChange}
        className="hidden"
      />
      
      <p className="mb-4 text-white">Upload a voice sample to clone (preferably MP3/WAV):</p>
      
      {sample ? (
        <div className="mb-4">
          <div className="bg-neon-blue/10 p-3 rounded flex items-center justify-between">
            <span className="text-white truncate">{sample.name}</span>
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-2 bg-black/50 border-white/10 text-white hover:bg-black/90"
              onClick={() => onSampleUploaded(null)}
            >
              Remove
            </Button>
          </div>
        </div>
      ) : (
        <Button 
          onClick={handleButtonClick}
          className="mb-4 bg-black/50 border-white/10 text-white hover:bg-black/90"
        >
          <Upload className="mr-2 h-4 w-4" /> Click to Upload
        </Button>
      )}
      
      <p className="text-sm text-gray-400">The audio will be automatically trimmed to the first 30 seconds</p>
    </div>
  );
};

export default VoiceSampleUploader;
