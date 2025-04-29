#!/bin/bash

# This script reorganizes the repository structure to work better with Render

# Create a temporary directory
mkdir -p temp_repo

# Copy all files from Desktop/Sonex-VoiceCraft to the root
cp -r Desktop/Sonex-VoiceCraft/* temp_repo/
cp -r Desktop/Sonex-VoiceCraft/.* temp_repo/ 2>/dev/null || :

# Move the files back to the root
cp -r temp_repo/* .
cp -r temp_repo/.* . 2>/dev/null || :

# Clean up
rm -rf temp_repo
rm -rf Desktop

echo "Repository reorganized successfully!"
