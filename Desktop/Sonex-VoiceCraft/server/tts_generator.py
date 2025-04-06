
from gtts import gTTS
import os
import sys
import json

def generate_speech(text, voice_id, output_filename="speech_output.mp3"):
    """
    Generate speech from text using gTTS
    
    Parameters:
    - text: The text to convert to speech
    - voice_id: Voice ID (currently only uses language code)
    - output_filename: Name of the output file
    
    Returns:
    - Path to the generated audio file
    """
    try:
        # Map voice IDs to language codes (simplified for example)
        language_map = {
            "1": "en",  # English
            "2": "fr",  # French
            "3": "es",  # Spanish
            "4": "de",  # German
            "5": "it",  # Italian
        }
        
        # Default to English if voice_id not found
        language = language_map.get(voice_id, "en")
        
        # Create gTTS object
        tts = gTTS(text=text, lang=language, slow=False)
        
        # Create public directory if it doesn't exist
        public_dir = "public"
        if not os.path.exists(public_dir):
            os.makedirs(public_dir)
            
        # Save to file
        output_path = os.path.join(public_dir, output_filename)
        tts.save(output_path)
        
        print(json.dumps({
            "success": True,
            "audioPath": output_filename
        }))
        
    except Exception as e:
        print(json.dumps({
            "success": False,
            "error": str(e)
        }))

# If script is run directly with arguments
if __name__ == "__main__":
    if len(sys.argv) > 1:
        # Parse the JSON input from command line
        try:
            input_data = json.loads(sys.argv[1])
            text = input_data.get("text", "")
            voice_id = input_data.get("voice", "1")
            output_file = input_data.get("outputFile", "speech_output.mp3")
            
            generate_speech(text, voice_id, output_file)
        except Exception as e:
            print(json.dumps({"success": False, "error": str(e)}))
    else:
        print(json.dumps({"success": False, "error": "No input provided"}))
