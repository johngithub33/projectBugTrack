var express = require('express');
var app = express();

var mysql = require('mysql');

//modules export objects {}, so need to acess an object's properties
var con = require('./dbConnection').con;

//to parse incoming html form requests, the "body" of the request
//this places the parsed body on the req.body object
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

//serve static files, automatically serve index.html
app.use(express.static(__dirname))


app.post('/userlogin', (req,res) => {
    res.sendFile(__dirname + '/dashboard.html')

})


//URL hit from POST form
app.post('/signup', function(req, res){

    let username = req.body.username;
    let password = req.body.password;

    con.query(`SELECT * FROM users WHERE EXISTS(SELECT * FROM USERS WHERE username = '${username}')`, 
    function (err,result){

            //error in connection query
            if(err){
                console.log('error')
                con.release();
                return;
            }

            //if query returns nothing
            if(result == '') res.send(`error page tbd, username not there, result is: ${result}`)

            //query returns '' for result if user not there
            else if(result != ''){

                //if username and password are correct
                if(username == result[0].username && password == result[0].password)
                {
                    console.log('logged in!')
                    
                    //need to add root directory of __dirname to serve file on route here
                    res.sendFile(__dirname + '/admin.html')
                }

                // for incorrect password
                else 
                {
                    console.log(`Password incorrect for user: ${username}. Also result is ${result}`)
                    res.send('error page tbd, password wrong')
                }
            }
        });
});

//API for live search bar
//this API is hit from admin.html page every time 'input' even occurs in the input box
//colon : in node means it's a param, get it in "params.id"
app.get('/livesearch/:id', (req,res) => {
    
        console.log("live search working! here's req: " + req.params.id);

        con.query(`SELECT * FROM users WHERE EXISTS(SELECT * FROM USERS WHERE username = '${req.params.id}')`, function (err,result){

                if(result != '') {
                    console.log("MATCH! password is: " + result[0].password);

                    //send text only back to front end
                    // the below three res statements can also be replaced with a simple res.send()
                        res.writeHead(200,{
                            "Content-Type": "text/plain",
                            "Access-Control-Allow-Origin": "*" // Allow access from other domains
                        });
                        res.write(result[0].password);
                        res.end();     

                    //how to send json/object back to front end
                        //res.status(200).json(result[0])
        
                }
                else
                {
                    //use no_match in the write() to tell the front end to not display anything yet because
                    //there's no match yet from the database
                    res.writeHead(200,{
                        "Content-Type": "text/plain",
                        "Access-Control-Allow-Origin": "*" // Allow access from other domains
                    });
                    res.write('no_match');
                    res.end(); 
                }
            })

})

app.listen(4000);