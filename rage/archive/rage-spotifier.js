// ABC Rage Spotifier 

/* Structure

Get each playlist as an array [list-datetime, list-url]
- div#listContainer
-- each child div is a month, where id = month+"_content", i.e. split as "_" and discard remainder


Get each song from a particular playlist as an array [list-url, time-slot, artist, [featured-artist,] song-title, song-publisher] 
(- find div.playlist)
- for each p.list
--- split by <br> to separate songs
----- strong.innerhtml = artist -> split by "featuring" to extract featured-artist
----- em.innerhtml = song-title
----- em.sibling = song-publisher

Needs a:
- song-extractor
- song-parser

*/

	// dependencies
    var http = require('http')
    var bl = require('bl')
    var yql = require('yql')

	// this is a very specific app at the moment
    var url = "http://www.abc.net.au/rage/playlists/"
    
    function collectHTML (target, callback) {
    
		http.get(target, function (response) {
		
		  response.pipe(bl(function (err, data) {
		  
			if (err)
			  return console.error("Error!".err);
		
			data = data.toString();
			callback(data);
		
		  }))  
		})
	}
	
	function getPlaylistURLs (data, number, callback) {
		
	}
	
	collectHTML (url, function (data) {
		getPlaylistURLs(data, 100, function(urlArray) {
			console.log(urlArray)
		}	
	}) 