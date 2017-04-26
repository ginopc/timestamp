var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.get('/', function(req, res){
	var result = {
		unix: undefined,
		natural: undefined
	};

	if (req == '') {
		console.log('Nothing in request');
		console.log(req);
   		res.send('Timestamps machine.');
	}
	else {
		console.log('Return timestamp');
		res.send(JSON.stringify(result));
	}
});

app.listen( PORT, function(){
   console.log("Server listening on port " + PORT + "!");
   console.log("[CTRL+C to exit]");
});
