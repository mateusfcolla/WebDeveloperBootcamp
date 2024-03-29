var express = require('express');
var app = express();
var request = require('request');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('search');
});

app.get('/results', function(req, res){
    var movie = req.query.search;
    var url = 'http://www.omdbapi.com/?s='+movie+'&apikey=thewdb';

    request(url, function(error, response, body){

    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        res.render('results', {data:parsedData}); 
    }

    else{
        console.log(error);
    }
    });
});

app.listen(1808, function(){
    console.log("Server started!")
});

