const fs = require('fs');
const express = require('express');
const app = express();
var path = require('path');
var request = require('request');
const port = 80;

//Add server helpers
eval('' + fs.readFileSync('./ServerHelper.js'));
Ricardo.init();

//Specify static loading
app.use(express.static(path.join(__dirname + '/public')));

//Initial loading (just to anyone accessing)
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

//For the api (maybe for the games too...?)
app.post('/api', function(req, res){
	res.header('Access-Control-Allow-Origin', '*');//'http://www.nimiqgames.ca/');
	res.header('Access-Control-Allow-Methods', 'POST');
	Ricardo.handleApi(req, res);
});

//Catch all 
app.get('*', function(req, res){
      res.sendFile(path.join(__dirname + '/public/index_not_found.html'));
});

app.listen(port);// () => console.log(ServerHelper.config.server_name + ' listening on port ' + port + '!'));
console.log('AffsoftTickerOneGB' + ' listening on port ' + port + '!');