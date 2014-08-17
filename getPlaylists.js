// ABC Rage Spotifier - Get Playlists

/* 

Get every playlist on the rageURL page, and store as an array of {date, url} pairs
- div#listContainer

Note: Playlists are organised in months, but this is currently ignored
-- each child div is a month, where id = month+"_content", i.e. split as "_" and discard remainder

*/

	// dependencies
    var http = require('http')
    var YQL = require('yql')
    var tests = require ('./test/tests')
    var getSongs = require ('./getSongs')
    var listNum = process.argv[2]

	// this is a very specific application at the moment
    var rageURL = "http://www.abc.net.au/rage/playlists/",
    	rageCSSSelector = "#listContainer div ul li"


	// Uses YQL to get all the playlist urls within a particular css selector
	function getPlayListURLs (siteUrl, cssSelector, callback) {		
		
		var query = 'select * from data.html.cssselect where url="'+siteUrl+'" and css="'+cssSelector+'"'
		new YQL.exec(query, function(response) {
			callback(response.query.results.results.li)
		});
	}


	getPlayListURLs (rageURL, rageCSSSelector, function (res) {
		var urlArray = []
		res.forEach( function(element) {
			if(typeof element.div[0].p.span === 'undefined') {
				urlArray.push({'date':element.div[0].p, 'url':element.a.href})
			} else {
				urlArray.push({'date':element.div[0].p.content, 'url':element.a.href})
			}
		});
		
		// Show result
		console.log(
			"\nRetrieved URL for playlist " + listNum + " of " + urlArray.length + "\n" 
			+ "Date: " + urlArray[listNum].date + "\n" 
			+ "URL: " + urlArray[listNum].url)
		
		// Confirm result
		tests.isPlayListDataCorrect(urlArray[listNum].date,urlArray[listNum].url)
		
		// Get songs
		getSongs (urlArray[listNum].url, function (songArray) {
			songArray.forEach( function(element, index) {
				console.log(
					index + ": "
					+ element.title + " by " 
					+ element.artist 
					)
			})
		})

		
	}) 
