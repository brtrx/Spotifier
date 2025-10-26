# Rick Beato's "What Makes This Song Great?" - Complete Episode List

A beautiful, interactive website listing all 115 episodes of Rick Beato's acclaimed YouTube series "What Makes This Song Great?" with direct Spotify links for each track.

## Features

- **Complete Episode List**: All 115 episodes with song titles and artists
- **Genre Classification**: Each song is tagged with multiple genres (60+ genres total)
- **Multi-Genre Filtering**: Filter songs by selecting one or multiple genres simultaneously
- **Spotify Integration**: Direct links to listen to each song on Spotify
- **Search Functionality**: Quickly find songs by title, artist, or episode number
- **Combined Filtering**: Search and genre filters work together for precise results
- **Responsive Design**: Beautiful gradient design that works on all devices
- **Real-time Filtering**: Instant search and filter results as you interact
- **Episode Statistics**: See total episodes, current search results, and genre count

## What's Included

- `index.html` - Main website with embedded styles and functionality
- `songs-data.js` - Complete dataset of all 115 episodes
- `README.md` - This file

## How to Use

### Simple Usage (No Server Required)

1. Simply open `index.html` in any modern web browser
2. The website will load with all 115 episodes
3. Click on genre buttons to filter songs by one or more genres
4. Use the search bar to filter songs by title, artist, or episode number
5. Combine search and genre filters for precise results
6. Click "Listen on Spotify" to hear any track

### With Local Server (Recommended)

For better performance and to avoid CORS issues, serve the files using a local web server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then open your browser to `http://localhost:8000`

## Spotify Integration

The current implementation creates direct Spotify search links for each song. This works without requiring Spotify API credentials and will open Spotify's search page with the song pre-filled.

### For Full API Integration

To implement full Spotify API integration with direct track links:

1. Create a Spotify Developer account at https://developer.spotify.com
2. Create a new app to get your Client ID and Client Secret
3. Update the Spotify configuration in the HTML file
4. Implement the OAuth flow for authentication

## About the Series

"What Makes This Song Great?" is Rick Beato's acclaimed YouTube series where he breaks down the musical elements that make iconic songs so memorable. The series features detailed analysis of:

- Production techniques
- Chord progressions
- Instrumental arrangements
- Vocal melodies
- Mix and mastering decisions

Each episode provides valuable insights for music enthusiasts, producers, and musicians alike.

## Episode Highlights

The series covers a wide range of artists and over 60 different music genres including:

- **Classic Rock**: Led Zeppelin, The Beatles, Pink Floyd, Queen, The Who
- **Alternative Rock**: Nirvana, Pearl Jam, Radiohead, Foo Fighters, The Cure
- **Progressive Rock**: Rush, Tool, Yes, Genesis, Kansas
- **Grunge**: Nirvana, Pearl Jam, Soundgarden, Alice In Chains
- **Metal**: Metallica (Thrash Metal), Slipknot (Nu Metal), Pantera (Groove Metal)
- **Pop & Soul**: Elton John, Stevie Wonder, Adele, Seal
- **New Wave**: The Police, Tears for Fears, The Cars
- **Funk Rock**: Red Hot Chili Peppers, Jane's Addiction
- **Jazz Fusion**: Steely Dan
- **And many more genres**: Pop Punk, Industrial Rock, Folk Rock, Singer-Songwriter, Britpop, and more!

### Genre Categories Available

The website includes 60+ genres for filtering:
- Alternative Metal, Alternative Rock, Arena Rock, Art Rock
- Blues Rock, Britpop, Classic Rock, Dance, Djent, EDM
- Electronic, Folk, Folk Rock, Funk, Funk Metal, Funk Rock
- Garage Rock, Glam Metal, Groove Metal, Grunge
- Hard Rock, Heartland Rock, Heavy Metal, Indie Rock
- Industrial Rock, Instrumental Rock, Jangle Pop, Jazz Fusion, Jazz Rock
- New Wave, Nu Metal, Opera Rock, Pop, Pop Punk, Pop Rock
- Post-Grunge, Power Pop, Progressive Metal, Progressive Rock
- Psychedelic Rock, R&B, Rap Metal, Rock
- Singer-Songwriter, Sludge Metal, Soft Rock, Soul, Space Rock
- Stoner Rock, Synth-pop, Thrash Metal
- And more!

## Credits

- **Series Creator**: Rick Beato
- **Website Development**: Created for fans of the series
- **Data Source**: Compiled from various sources including Rick Beato's YouTube channel, community playlists, and fan databases

## Links

- [Rick Beato's YouTube Channel](https://www.youtube.com/@RickBeato)
- [Rick Beato's Website](https://rickbeato.com)
- [Spotify](https://open.spotify.com)

## License

This is a fan-made project. All music rights belong to their respective owners. This website is for educational and informational purposes only.

## Contributing

Found an error or missing episode? Feel free to submit corrections or improvements!
