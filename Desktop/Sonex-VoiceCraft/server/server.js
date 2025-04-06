
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Parse JSON requests
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// API endpoint for generating speech
app.post('/api/generate-speech', (req, res) => {
  const { text, voice, outputFile } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }
  
  // Ensure the public directory exists
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Prepare the input for the Python script
  const scriptInput = JSON.stringify({
    text,
    voice: voice || '1',
    outputFile: outputFile || 'speech_output.mp3'
  });
  
  // Path to the Python script
  const scriptPath = path.join(__dirname, 'tts_generator.py');
  
  // Execute the Python script
  const pythonProcess = spawn('python', [scriptPath, scriptInput]);
  
  let outputData = '';
  let errorData = '';
  
  pythonProcess.stdout.on('data', (data) => {
    outputData += data.toString();
  });
  
  pythonProcess.stderr.on('data', (data) => {
    errorData += data.toString();
    console.error('Python script stderr:', data.toString());
  });
  
  pythonProcess.on('close', (code) => {
    if (code !== 0) {
      console.error(`Python process exited with code ${code}`);
      return res.status(500).json({ error: 'Failed to generate speech' });
    }
    
    if (errorData) {
      console.error('Python script error:', errorData);
    }
    
    try {
      // Parse the Python script output
      const result = JSON.parse(outputData);
      
      if (result.success) {
        res.json({ audioPath: result.audioPath });
      } else {
        res.status(500).json({ error: result.error || 'Unknown error occurred' });
      }
    } catch (e) {
      console.error('Failed to parse Python script output:', e);
      res.status(500).json({ error: 'Invalid response from speech generator' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
