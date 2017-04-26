var express = require('express');
var app = express();
var moment = require('moment');
var path = require('path');
var PORT = process.env.PORT || 8080;

// define static pages
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:datestring', function(req, res){
	var myDate;
	var datestring = req.params.datestring;
	var result = {
		unix: null,
		natural: null
	}
	
	if (+datestring > 0) {
		// unix timestamp
		console.log('New Unix timestamp: ' + datestring)
		myDate = new Date(+datestring);
	}
	else {
		if (moment(datestring).isValid()) {
			console.log('New Natural timestamp: ' + datestring)
			myDate = new Date(datestring);
		}
		else {
			console.log('Invalid timestamp entered: ' + datestring);
			myDate = null;
		}
	}
	
	if (myDate != null)
		result = {
			unix: moment(myDate).format('X'),
			natural: moment(myDate).format('MMMM D, YYYY')
		}

	res.json(result);
});

app.listen( PORT, function(){
   console.log("Server listening on port " + PORT + "!");
   console.log("[CTRL+C to exit]");
});
