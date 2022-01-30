var express = require('express');
var app = express();

var mysql = require('mysql');

//to parse incoming html form requests, the "body" of the request
//this places the parsed body on the req.body object
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

//serve static files, automatically serve index.html
app.use(express.static(__dirname))

// mysql
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'bugTracker',
  });
  
  con.connect(function(err) { if (err) throw err;} )


app.post('/signup', function(req, res){

    let username = req.body.username;
    let password = req.body.password;

    // con.query("SELECT * FROM users WHERE EXISTS(SELECT * FROM USERS WHERE username = 'james')", function (err,result){

        con.query(`SELECT * FROM users WHERE EXISTS(SELECT * FROM USERS WHERE username = '${username}')`, function (err,result){

            // need try-catch here if user not found
            //https://riptutorial.com/node-js/example/25797/async-functions-with-try-catch-error-handling

            //if username and password are correct
            if(username == result[0].username && password == result[0].password){
                console.log('logged in!')
            }

            // for incorrect password
            else {
                console.log(`Password incorrect for user: ${username}.`)
            }
    });

    //need to add root directory of __dirname to serve file on route here
    res.sendFile(__dirname + '/admin.html')
      
});

//live search bar
//this API is hit from admin.html page every time 'input' even occurs in the input box
//colon : in node means it's a param, get it in "params.id"
app.get('/livesearch/:id', (req,res) => {
    console.log("live search working! here's req: " + req.params.id);

    if(req.params.id == 'james')
        con.query(`SELECT * FROM users WHERE EXISTS(SELECT * FROM USERS WHERE username = '${req.params.id}')`, function (err,result){

            console.log("MATCH!" + result[0].password);
        })

})




app.listen(4000);