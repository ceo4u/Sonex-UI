
# Text-to-Speech Generator Server

This is a simple Express.js server that uses gTTS (Google Text-to-Speech) to generate speech from text.

## Setup

1. Install Node.js dependencies:
   ```
   npm install express body-parser
   ```

2. Install Python dependencies:
   ```
   pip install gtts
   ```

3. Start the server:
   ```
   node server.js
   ```

The server will run on port 3001 by default. You can change this by setting the PORT environment variable.

## API Endpoints

### POST /api/generate-speech

Generates speech from text.

**Request Body:**
```json
{
  "text": "Text to convert to speech",
  "voice": "1", // Voice ID (1 = English, 2 = French, etc.)
  "outputFile": "speech_output.mp3" // Optional, default: speech_output.mp3
}
```

**Response:**
```json
{
  "audioPath": "speech_output.mp3" // Path to the generated audio file
}
```

## Folder Structure

- `server.js` - Main server file
- `api-handlers.js` - API route handlers
- `tts_generator.py` - Python script for generating speech
- `public/` - Directory for generated audio files

## Integration with Frontend

The frontend should send requests to the `/api/generate-speech` endpoint with the required parameters. The server will generate the speech and return the path to the audio file, which can then be played in the browser.
