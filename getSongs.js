// ABC Rage Spotifier - YQL parser

/*

Given a playlist URL return an array of songs [artist, [featured-artist,] song-title] 

- uses songsDiv variable to set the css selector to finding the div containing the list of songs 
--- strong.innerhtml = artist 
-----split by "featuring" to extract featured-artist (NOT USED)
--- em.innerhtml = song-title
--- em.sibling = song-publisher (NOT USED)

Needs a:
- song-extractor
- song-parser

*/

	// This program takes a playlist url, and produces an ordered song array

	// dependencies
    var http = require('http')
    var YQL = require('yql')
	//var pageURL = process.argv[2]
	var	songsDIV = "p.list"

	// Uses YQL to get all the playlist urls within a particular css selector
	function getPlaylist (siteURL, cssSelector, callback) {		

		var query = 'select * from data.html.cssselect where url="'+siteURL+'" and css="'+cssSelector+'"'
		new YQL.exec(query, function(response) {
			callback(response.query.results.results.p)
		});
	}

	String.prototype.toTitleCase = function ()
	{
		return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}

	
	module.exports = function getSongs (pageURL, callback) {	
		getPlaylist (pageURL, songsDIV, function(res) {

			var songArray = []
			var count = 0
		
			for (var i=0; i<res.length; i++) {
				var slotSongs = res[i]
			
				// for each song
				for (var j=0; j<slotSongs.strong.length; j++) {
					var artists = slotSongs.strong[j].split("featuring")
					var title = slotSongs.em[j]
				
					songArray.push(
						{
							'id':count,
							'artist':artists[0].toTitleCase(),  // 'feature-artist':artists[1],
							'title':title, 
						 })
					count++
				}
			}	
			callback(songArray)
		})
	}