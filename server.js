
const express = require('express');
const cors = require('cors');
const db = require("./db-connection.js");

const app = express();
require('./API/routes/index')(app); 
app.use(cors());
app.use(express.json());

//database connection
global.db_connection = db.connect();
db.selectbd();


app.listen(3333, () =>{
    console.log("Server started: port 3333");
});

/*global.db_connection.query("show COLUMNS from User_Client_Master", function (err, result){
    if (err) throw err;
    console.log(result);
  });*/

