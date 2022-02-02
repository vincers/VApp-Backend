const user_util = require("../data/User.js");

/********* GET *********/
exports.getClient = (req, res) => {
   const id = req.params.id;
   data = user_util.getById_Type(id,1);
   if(data){
      res.status(404);
   }
   else{
      res.status(200);
      res.json(data);
   }
};

exports.getTypeClient = (req, res) => {
    const id = req.params.id;
    const sql = "select user_type from User_Client_Master where user_id = '"+id+"'";
    global.db_connection.query(sql, function (err, result) {
        if (err) throw err;
        
        if(result.length != 1){
            res.status(404);
            const data = {"message": "User not found"};
            res.json(data);
        }
        else{
            res.status(200);
            //TODO validate type number and return string type?
            res.json(result[0]);
        }
    });
 };

 exports.getBalance = (req, res) => {
    const id = req.params.id;
    data = user_util.getById_Type(id,1);
    if(data){
       res.status(404);
    }
    else{
       res.status(200);
       res.json(data.general_balance);
    }
 };

 exports.getArtsOngoing = (req, res) => {
    const id = req.params.id;
    const sql = "select art_id from Art where user_id = '"+id+"' and status = ongoing";
    global.db_connection.query(sql, function (err, result) {
        if (err) throw err;
        
        if(result.length != 1){
            res.status(201);
            const data = {"message": "Not found Arts"};
            res.json(data);
        }
        else{
            res.status(200);
            res.json(result);
        }
    });
 };

/********* PUT *********/
 exports.putBalance = (req, res) => {
    const id = req.body.id;
    const new_balance = req.body.general_balance;
    const sql = "update User_Client_Master set general_balance = "+new_balance+" where user_id = '"+id+"'";
    global.db_connection.query(sql, function (err, result) {
        if (err) {throw err}
        else{
            res.status(200).send("Balance updated successfully!");
        }
    });

 };