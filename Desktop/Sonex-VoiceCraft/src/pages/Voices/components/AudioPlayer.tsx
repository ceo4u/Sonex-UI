
import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";

interface AudioPlayerProps {
  audioSrc: string | null;
  audioRef: React.RefObject<HTMLAudioElement>;
}

const AudioPlayer = ({ audioSrc, audioRef }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // When audioSrc changes, attempt to play the audio
    if (audioSrc && audioRef.current) {
      audioRef.current.load();
      
      // Add an event listener for when the audio has loaded metadata
      const playAudio = () => {
        const playPromise = audioRef.current?.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              console.log("Audio started playing");
            })
            .catch(error => {
              console.error("Audio playback error:", error);
            });
        }
      };
      
      audioRef.current.addEventListener('loadedmetadata', playAudio);
      
      // Add event listeners to track playing state
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => setIsPlaying(false);
      
      audioRef.current.addEventListener('pause', handlePause);
      audioRef.current.addEventListener('ended', handleEnded);
      
      // Clean up the event listeners
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('loadedmetadata', playAudio);
          audioRef.current.removeEventListener('pause', handlePause);
          audioRef.current.removeEventListener('ended', handleEnded);
        }
      };
    }
  }, [audioSrc]);

  if (!audioSrc) return null;
  
  return (
    <div className="mb-8 glass-card p-4 flex items-center justify-center">
      <Volume2 className={`h-6 w-6 ${isPlaying ? 'text-green-500' : 'text-neon-blue'} mr-3`} />
      <audio ref={audioRef} src={audioSrc} controls className="w-full max-w-md" id="audio-player">
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
