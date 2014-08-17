

    var http = require('http')
    var YQL = require('yql')
    
	// isPlayListDataCorrect
	// Given a date, url pair, confirm that the playlist at that url corresponds to that date
	exports.isPlayListDataCorrect = function isPlayListDataCorrect (date, url) {
		date = date.trim() // remove leading/trailing spaces
		var cssSelector = "p.date"
		var query = 'select * from data.html.cssselect where url="'+url+'" and css="'+cssSelector+'"'

		new YQL.exec(query, function(response) {
			
			var confirmedDate = response.query.results.results.p.content.trim() // remove leading/trailing spaces
			var testResult = (confirmedDate == date) 
			var testResultText = testResult ? "PASSED" : "FAILED"
			
			var equalitySign = testResult ? " = " : " != "
			console.log(
				"\nisPlayListDataCorrect: " + testResultText + "!"
				+ "\nSource Date: (" + date + ")" 
				+ equalitySign 
				+ "Target Date (" + confirmedDate + ")\n" 
				
			)

		});
		
	}
	
		