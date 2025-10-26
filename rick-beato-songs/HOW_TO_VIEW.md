# How to See the YouTube Links

The YouTube links are in the code! If you're not seeing them, try these steps:

## Step 1: Hard Refresh Your Browser

The browser may be showing a cached version. Try:

- **Windows/Linux**: Press `Ctrl + Shift + R` or `Ctrl + F5`
- **Mac**: Press `Cmd + Shift + R`

OR clear your browser cache completely.

## Step 2: Open the Test Page

I've created a simple test page. Open this file in your browser:

```
rick-beato-songs/test.html
```

This test page will show you:
- One YouTube link (red button)
- One Spotify link (green button)
- The actual URLs being generated

## Step 3: Verify with a Local Server

If you're opening the file directly (file:// protocol), try using a local server:

```bash
cd rick-beato-songs
python3 -m http.server 8080
```

Then open: http://localhost:8080

## What You Should See

Each song card should have TWO buttons:
1. **Red "Watch Episode" button** - Links to YouTube search for Rick Beato's episode
2. **Green "Listen on Spotify" button** - Links to Spotify

Both buttons should be side-by-side (or stacked on mobile).

## Still Not Working?

Check the browser console (F12) for any JavaScript errors.
