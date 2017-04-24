var express = require('express');
var app = express();
var PORT = process.env.PORT;

app.get('/', function(req, res){
   res.send('Hello, world!');
});

app.listen( PORT, function(){
   console.log("Server listening on port " + PORT + "!");
   console.log("[CTRL+C to exit]");
});