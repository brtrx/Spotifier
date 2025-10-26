/**
 * Rick Beato Song List Server
 * Uses Spotify API to fetch direct track links
 */

const express = require('express');
const request = require('request');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Load Spotify credentials from config
let spotifyConfig = {
    client_id: '',
    client_secret: ''
};

try {
    const configPath = path.join(__dirname, '../spotifier-config.txt');
    if (fs.existsSync(configPath)) {
        const config = fs.readFileSync(configPath, 'utf8');
        const lines = config.split('\n');
        lines.forEach(line => {
            if (line.includes('client_id')) {
                spotifyConfig.client_id = line.split('=')[1].trim();
            }
            if (line.includes('client_secret')) {
                spotifyConfig.client_secret = line.split('=')[1].trim();
            }
        });
    }
} catch (error) {
    console.log('Config file not found, using environment variables or defaults');
}

// Get Spotify access token using Client Credentials flow
async function getSpotifyAccessToken() {
    return new Promise((resolve, reject) => {
        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + Buffer.from(
                    spotifyConfig.client_id + ':' + spotifyConfig.client_secret
                ).toString('base64')
            },
            form: {
                grant_type: 'client_credentials'
            },
            json: true
        };

        request.post(authOptions, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body.access_token);
            } else {
                reject(error || 'Failed to get access token');
            }
        });
    });
}

// Search for a track on Spotify
async function searchSpotifyTrack(accessToken, artist, song) {
    return new Promise((resolve, reject) => {
        const searchQuery = encodeURIComponent(`track:${song} artist:${artist}`);
        const options = {
            url: `https://api.spotify.com/v1/search?q=${searchQuery}&type=track&limit=1`,
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            json: true
        };

        request.get(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                if (body.tracks && body.tracks.items && body.tracks.items.length > 0) {
                    const track = body.tracks.items[0];
                    resolve({
                        spotifyUrl: track.external_urls.spotify,
                        trackId: track.id,
                        trackName: track.name,
                        artistName: track.artists[0].name,
                        albumArt: track.album.images[0]?.url,
                        previewUrl: track.preview_url
                    });
                } else {
                    // No exact match found, return search URL
                    resolve({
                        spotifyUrl: `https://open.spotify.com/search/${encodeURIComponent(song + ' ' + artist)}`,
                        trackId: null,
                        trackName: song,
                        artistName: artist,
                        albumArt: null,
                        previewUrl: null
                    });
                }
            } else {
                reject(error || 'Search failed');
            }
        });
    });
}

// API endpoint to search for a single track
app.post('/api/search-track', async (req, res) => {
    try {
        const { artist, song } = req.body;

        if (!artist || !song) {
            return res.status(400).json({ error: 'Artist and song are required' });
        }

        const accessToken = await getSpotifyAccessToken();
        const result = await searchSpotifyTrack(accessToken, artist, song);

        res.json(result);
    } catch (error) {
        console.error('Error searching track:', error);
        res.status(500).json({
            error: 'Failed to search track',
            spotifyUrl: `https://open.spotify.com/search/${encodeURIComponent(req.body.song + ' ' + req.body.artist)}`
        });
    }
});

// API endpoint to search for multiple tracks
app.post('/api/search-tracks', async (req, res) => {
    try {
        const { tracks } = req.body;

        if (!tracks || !Array.isArray(tracks)) {
            return res.status(400).json({ error: 'Tracks array is required' });
        }

        const accessToken = await getSpotifyAccessToken();

        // Process tracks in batches to avoid rate limiting
        const batchSize = 10;
        const results = [];

        for (let i = 0; i < tracks.length; i += batchSize) {
            const batch = tracks.slice(i, i + batchSize);
            const batchPromises = batch.map(track =>
                searchSpotifyTrack(accessToken, track.artist, track.song)
                    .catch(err => ({
                        spotifyUrl: `https://open.spotify.com/search/${encodeURIComponent(track.song + ' ' + track.artist)}`,
                        trackId: null,
                        error: err.message
                    }))
            );

            const batchResults = await Promise.all(batchPromises);
            results.push(...batchResults);

            // Small delay between batches
            if (i + batchSize < tracks.length) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }

        res.json({ tracks: results });
    } catch (error) {
        console.error('Error searching tracks:', error);
        res.status(500).json({ error: 'Failed to search tracks' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        spotify: spotifyConfig.client_id ? 'configured' : 'not configured'
    });
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Rick Beato Song List server running on http://localhost:${PORT}`);
    console.log(`Spotify API: ${spotifyConfig.client_id ? 'Configured' : 'Not configured'}`);
});
