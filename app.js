var express = require('express');
var app = express();

//to parse incoming html form requests, the "body" of the request
//this places the parsed body on the req.body object
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

//serve static files, automatically serve index.html
app.use(express.static(__dirname))


app.post('/signup', function(req, res){

    //need to add root directory of __dirname to serve file on route here
    res.sendFile(__dirname + '/admin.html')
      
});




app.listen(4000);