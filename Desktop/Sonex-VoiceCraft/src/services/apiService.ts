
import axios from 'axios';

// Get the API URL from environment variables or use a default
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Create an Axios instance with the backend base URL
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to check the health of the backend
export const fetchHealth = async (): Promise<any> => {
  try {
    const response = await apiClient.get('/healthcheck');
    return response.data;
  } catch (error) {
    console.error('Error fetching health', error);
    throw error;
  }
};

// Function to synthesize speech
export const synthesizeSpeech = async (text: string, speakerId: number = 1): Promise<string> => {
  try {
    const response = await apiClient.post('/synthesize',
      { text, speaker_id: speakerId },
      { responseType: 'blob' }
    );

    // Create a blob URL from the response for audio playback
    const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
    return URL.createObjectURL(audioBlob);
  } catch (error) {
    console.error('Error synthesizing speech', error);
    throw error;
  }
};

// Function to trigger voice cloning. This expects form data including an audio file and text.
export const cloneVoice = async (formData: FormData): Promise<any> => {
  try {
    const response = await apiClient.post('/api/clone-voice', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error('Error cloning voice', error);
    throw error;
  }
};

// Function to download generated audio by filename
export const downloadAudio = (filename: string): string => {
  return `${API_URL}/api/download/${filename}`;
};
