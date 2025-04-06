
Sonex VoiceCraft is a text-to-speech application that allows users to generate speech from text using various voices and languages.

Project info
If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - install with nvm

Follow these steps:

# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/ceo4u/Sonex-UI.git

# Step 2: Navigate to the project directory.
cd Sonex-UI

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
Deployment on Render
This project is configured for deployment on Render. The deployment process is automated using the render.yaml configuration file.

Deployment Steps
Push your code to GitHub
Create a new Render account or log in to your existing account
Create a new Web Service and connect your GitHub repository
Render will automatically detect the render.yaml configuration and set up the services
Click "Deploy" to start the deployment process
Manual Deployment
If you prefer to set up the deployment manually:

Frontend
Create a new Static Site on Render
Connect your GitHub repository
Set the build command to npm install && npm run build
Set the publish directory to dist
Add the environment variable VITE_API_URL pointing to your backend URL
Backend
Create a new Web Service on Render
Connect your GitHub repository
Set the build command to cd server && npm install
Set the start command to cd server && npm start
Add the environment variable PORT with value 3001
Edit a file directly in GitHub

Navigate to the desired file(s).
Click the "Edit" button (pencil icon) at the top right of the file view.
Make your changes and commit the changes.
Use GitHub Codespaces

Navigate to the main page of your repository.
Click on the "Code" button (green button) near the top right.
Select the "Codespaces" tab.
Click on "New codespace" to launch a new Codespace environment.
Edit files directly within the Codespace and commit and push your changes once you're done.
What technologies are used for this project?
This project is built with .

Vite
TypeScript
React
shadcn-ui
Tailwind CSS
