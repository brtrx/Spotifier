// ABC Rage Spotifier - YQL parser

/* Structure

Get each playlist as an array [list-datetime, list-url]
- div#listContainer
-- each child div is a month, where id = month+"_content", i.e. split as "_" and discard remainder

*/

	// dependencies
    var http = require('http')
    var YQL = require('yql')
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
		// Showing how to reference date and url separately
		console.log("Number " + listNum + " of " + urlArray.length + "\n" + urlArray[listNum].date + " - " + urlArray[listNum].url)
		
	})