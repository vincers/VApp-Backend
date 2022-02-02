const env_vars = require('dotenv').config();

//Make a connection with db 
exports.connect = () => {
    const mysql = require("mysql2");
    const con =  mysql.createConnection({
      host: env_vars.parsed.DB_HOST,
      user: env_vars.parsed.DB_USER,
      password: env_vars.parsed.DB_PASS,
      port:env_vars.parsed.DB_PORT
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });

    return con;
  };

//Select database 
exports.selectbd = () =>{
  const con = global.db_connection;
  con.query("USE "+env_vars.parsed.DB_NAME, function (err, result) {
    if (err) throw err;
    console.log("Using Database"+env_vars.parsed.DB_NAME);
  });
};