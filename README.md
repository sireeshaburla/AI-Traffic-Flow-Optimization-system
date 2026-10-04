# AI-Powered Traffic Flow Optimization System

A responsive web dashboard prototype that demonstrates traffic monitoring, lane-density estimates, adaptive signal recommendations, and a live simulation.

## Requirements
- Node.js 18+ and npm
- Git

## Run locally (Windows PowerShell / VS Code terminal)
1. Extract the ZIP file.
2. Open the extracted `ai-traffic-flow-optimization` folder in VS Code.
3. Open Terminal → New Terminal and run:

```bash
npm install
npm start
```

4. Open http://localhost:3000 in your browser.
5. Click **Start simulation** to see changing lane counts and recommendations. Use **Reset** to restore the sample.

Health check: http://localhost:3000/api/health

## Upload to GitHub
In the project folder terminal, run these commands (replace `YOUR_USERNAME` with your GitHub username):

```bash
git init
git add .
git commit -m "Add AI traffic flow optimization dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ai-traffic-flow-optimization.git
git push -u origin main
```

Create an empty repository with that name on GitHub first. If Git says a remote named `origin` already exists, use `git remote set-url origin https://github.com/YOUR_USERNAME/ai-traffic-flow-optimization.git` and push again.

## Deploy on Render
1. Sign in to Render and choose **New → Web Service**.
2. Connect the GitHub repository you just pushed.
3. Use these settings:
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance:** Free (if available)
4. Click **Create Web Service** and wait for deployment.
5. Open the `onrender.com` URL Render gives you.

## Important project note
This is a working front-end simulation with generated sample counts. It does **not** currently run a trained YOLO model, read a live camera, or control real traffic lights. For a real AI implementation, add a labeled traffic dataset, train/evaluate a detection model, connect a video stream, and test signal logic in a traffic simulator before any real-world use.
