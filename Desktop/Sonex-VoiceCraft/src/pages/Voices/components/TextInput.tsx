
import { Textarea } from "@/components/ui/textarea";

interface TextInputProps {
  text: string;
  setText: (text: string) => void;
  maxChars: number;
}

const TextInput = ({ text, setText, maxChars }: TextInputProps) => {
  return (
    <div className="glass-card mb-12">
      <h2 className="text-xl font-semibold mb-4 text-neon-blue">Enter Text</h2>
      <Textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-40 p-4 bg-black/50 border border-white/10 rounded-lg text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue resize-none"
        placeholder="Enter the text you'd like to convert to speech..."
        maxLength={maxChars}
        id="tts-input"
      />
      <div className="flex justify-between mt-2">
        <p className="text-sm text-gray-400">Type your text above and select a voice to generate speech</p>
        <span className={`text-sm ${text.length > maxChars ? 'text-red-500' : 'text-gray-400'}`}>
          {text.length} / {maxChars} characters
        </span>
      </div>
    </div>
  );
};

export default TextInput;
