# Emergency Face ID App

This is a minimal React Native example using Expo. The app authenticates the user via Face ID and calls the emergency number when the button is pressed after authentication.

## Running

1. Install dependencies with `npm install`.
2. Start the Expo development server with `npm start`.
3. Run the app on your device or emulator using the Expo Go app.

## GitHub Pages Hosting

This repository includes a GitHub Actions workflow that exports the app for the web
and deploys it to GitHub Pages whenever changes are pushed to the `main` branch.

1. Ensure GitHub Pages is enabled on your repository.
2. Push to the `main` branch and the workflow will build and publish the web app.

The emergency number dialed is set to `112`. You can change this in `App.js`.
