
import React, { useEffect, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";

interface AudioTimelineProps {
  audioSrc: string;
  isPlaying: boolean;
  onPlayPause: () => void;
}

const AudioTimeline: React.FC<AudioTimelineProps> = ({ audioSrc, isPlaying, onPlayPause }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [waveformData, setWaveformData] = useState<number[]>([]);
  
  // Handle audio metadata loading
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      
      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };
      
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [audioSrc]);
  
  // Handle audio time updates
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };
      
      audio.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [audioSrc]);
  
  // Generate waveform visualization
  useEffect(() => {
    if (!audioSrc) return;
    
    // Simplified waveform generation for demonstration
    // In a real implementation, you'd analyze the audio data
    const generateRandomWaveform = () => {
      const waveformPoints = [];
      for (let i = 0; i < 100; i++) {
        // Generate a smooth wave-like pattern
        const height = 0.2 + Math.sin(i / 5) * 0.2 + Math.random() * 0.2;
        waveformPoints.push(height);
      }
      setWaveformData(waveformPoints);
    };
    
    generateRandomWaveform();
    
  }, [audioSrc]);
  
  // Draw waveform visualization
  useEffect(() => {
    if (canvasRef.current && waveformData.length > 0) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Set canvas dimensions
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate dimensions
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const barWidth = width / waveformData.length;
      
      // Draw waveform
      waveformData.forEach((value, index) => {
        const x = index * barWidth;
        const barHeight = value * height;
        
        // Determine if this part of the waveform has been played
        const progress = currentTime / duration;
        const playedPosition = width * progress;
        
        // Set color based on played/unplayed
        ctx.fillStyle = x < playedPosition ? '#00C8FF' : 'rgba(255, 255, 255, 0.3)';
        
        // Draw bar
        const y = (height - barHeight) / 2;
        ctx.fillRect(x, y, barWidth - 1, barHeight);
      });
    }
  }, [waveformData, currentTime, duration]);
  
  // Play/pause audio
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);
  
  // Handle slider change
  const handleSliderChange = (value: number[]) => {
    if (audioRef.current && value.length > 0) {
      const newTime = (value[0] / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  
  // Format time (seconds to MM:SS)
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="audio-timeline-editor">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      
      <div className="waveform-container mb-3 h-24 bg-black/40 rounded-lg overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
          onClick={(e) => {
            if (canvasRef.current) {
              const rect = canvasRef.current.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const ratio = x / rect.width;
              if (audioRef.current) {
                audioRef.current.currentTime = ratio * duration;
              }
            }
          }}
        />
      </div>
      
      <div className="flex justify-between text-xs text-gray-400 mb-2">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
      
      <Slider 
        value={[currentTime / duration * 100]} 
        onValueChange={handleSliderChange}
        className="[&>*:first-child]:bg-neon-blue/20 [&>*:nth-child(2)]:bg-neon-blue"
      />
    </div>
  );
};

export default AudioTimeline;
