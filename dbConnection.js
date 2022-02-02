
var mysql = require('mysql')


const jamesvar = 99;


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'bugTracker',
  });

exports.con = con;