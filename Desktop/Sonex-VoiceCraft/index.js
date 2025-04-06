// This file serves as an entry point for Render deployment
// It simply requires the server.js file from the server directory

console.log('Starting Sonex VoiceCraft server...');

try {
  // Try to require the server from the Desktop/Sonex-VoiceCraft directory
  require('./Desktop/Sonex-VoiceCraft/server/server.js');
} catch (error) {
  console.error('Error loading server from Desktop/Sonex-VoiceCraft:', error);
  
  try {
    // Fallback to the server directory
    require('./server/server.js');
  } catch (fallbackError) {
    console.error('Error loading server from server directory:', fallbackError);
    console.error('Could not start the server. Please check the directory structure.');
    process.exit(1);
  }
}
