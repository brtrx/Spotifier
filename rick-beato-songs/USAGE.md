# Quick Start Guide

## Option 1: Open Directly in Browser (Simplest)

1. Navigate to the `rick-beato-songs` folder
2. Double-click `index.html` to open it in your browser
3. That's it! The website will work immediately with Spotify search links

## Option 2: Run with Simple HTTP Server

For better performance, serve the files using a local web server:

### Using Python (Recommended if you have Python installed)

```bash
cd rick-beato-songs
python3 -m http.server 8080
```

Then open your browser to: http://localhost:8080

### Using Node.js

If you have Node.js installed:

```bash
cd rick-beato-songs
npx http-server -p 8080
```

Then open your browser to: http://localhost:8080

## Option 3: Run with Full Spotify API Integration

For direct track links instead of search links, you can use the Node.js server:

### Prerequisites

1. Node.js installed on your system
2. Spotify Developer credentials (see below)

### Setup Spotify API Credentials

1. Go to https://developer.spotify.com/dashboard
2. Log in with your Spotify account
3. Click "Create an App"
4. Fill in the app name and description
5. Copy your Client ID and Client Secret
6. Create a config file at the parent directory level named `spotifier-config.txt`:

```
client_id=YOUR_CLIENT_ID_HERE
client_secret=YOUR_CLIENT_SECRET_HERE
```

### Run the Server

```bash
cd rick-beato-songs
npm install
npm start
```

The server will start at http://localhost:3000

## Features

### Genre Filtering (NEW!)
- Filter songs by musical genre
- Select multiple genres at once to see songs that match ANY of the selected genres
- Over 60 genres to choose from including:
  - Rock genres: Classic Rock, Hard Rock, Progressive Rock, Alternative Rock
  - Metal genres: Heavy Metal, Thrash Metal, Nu Metal, Progressive Metal
  - Grunge, New Wave, Pop, Soul, Funk Rock, and many more!
- Click "Clear Filters" to reset all genre selections
- Genre tags displayed on each song card

### Search Functionality
- Type in the search box to filter songs by:
  - Song title
  - Artist name
  - Episode number
- Combine search with genre filters for precise results

### YouTube Episode Links (NEW!)
- Click "Watch Episode" to view Rick Beato's full analysis on YouTube
- YouTube search links help you find the specific "What Makes This Song Great" episode
- Links open in a new tab
- Works on desktop and mobile

### Spotify Links
- Click "Listen on Spotify" to hear any track
- Links open in a new tab
- Works on desktop and mobile

### Responsive Design
- Beautiful gradient background
- Card-based layout with genre tags
- Red YouTube buttons and green Spotify buttons for easy identification
- Mobile-friendly interface
- Smooth animations and hover effects

## Troubleshooting

### Website doesn't load
- Make sure you're opening `index.html` from the `rick-beato-songs` folder
- Try using one of the HTTP server options instead

### Spotify links don't work
- Make sure you have Spotify installed or are logged into Spotify Web
- If using the API server, check that your credentials are correct

### Search not working
- Make sure JavaScript is enabled in your browser
- Try refreshing the page

## Browser Compatibility

Works with all modern browsers:
- Chrome / Edge (recommended)
- Firefox
- Safari
- Opera

Requires JavaScript to be enabled.
