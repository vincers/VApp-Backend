const user_util = require("../data/User.js");
const datas = require("../data/data.json");

/********* GET *********/
exports.getClient = (req, res) => {
   const id = req.params.id;
   user_util.getById_Type(id,"client",function(err,result){ //// ver o nome no banco
    if(err){
       res.status(404);
       res.json(err);
    }
    else{
       res.status(200);
       res.json(result);
    }
    });
};

exports.getTypeClient = (req, res) => {
    const id = req.params.id;
    const sql = "select user_type from User_Client where user_id = '"+id+"'";
    global.db_connection.query(sql, function (err, result) {
        if (err) throw err;
        
        if(result.length != 1){
            res.status(404);
            const data = {"message": "User not found"};
            res.json(data);
        }
        else{
            res.status(200);
            const data = {"type": result[0].type };
            res.json(data);
        }
    });
 };

 exports.getBalance = (req, res) => {
    const id = req.params.id;
    user_util.getById_Type(id,2,function(err,result){
        if(err){
           res.status(404);
           res.json(err);
        }
        else{
           res.status(200);
           res.json(result.general_balance);
        }
        });
    };
    

 exports.getArtsOngoing = (req, res) => {
    const id = req.params.id;
    const sql = "select art_id from Art where client_id = '"+id+"' and status != '"+datas.art_status["complete"]+"'"; //completed
    global.db_connection.query(sql, function (err, result) {
        if (err) throw err;
        
        if(result.length != 1){
            res.status(201);
            const data = {"message": "Not found Arts"};
            res.json(data);
        }
        else{
            res.status(200);
            res.json(result[0]);
        }
    });
 };

 exports.getArtsNew = (req, res) => {
    const id = req.params.id;
    const sql = "select art_id from Art where client_id = '"+id+"' and status = '"+datas.art_status["new"]+"'"; //new
    global.db_connection.query(sql, function (err, result) {
        if (err) throw err;
        
        if(result.length != 1){
            res.status(201);
            const data = {"message": "Not found Arts"};
            res.json(data);
        }
        else{
            res.status(200);
            res.json(result[0]);
        }
    });
 };

 exports.getArtsWaiting = (req, res) => {
    const id = req.params.id;
    const sql = "select art_id from Art where client_id = '"+id+"' and status = '"+datas.art_status["wait"]+"'"; //waiting
    global.db_connection.query(sql, function (err, result) {
        if (err) throw err;
        
        if(result.length != 1){
            res.status(201);
            const data = {"message": "Not found Arts"};
            res.json(data);
        }
        else{
            res.status(200);
            res.json(result[0]);
        }
    });
 };

 exports.getArtsCreating = (req, res) => {
    const id = req.params.id;
    const sql = "select art_id from Art where client_id = '"+id+"' and status = '"+datas.art_status["create"]+"'"; //creating
    global.db_connection.query(sql, function (err, result) {
        if (err) throw err;
        
        if(result.length != 1){
            res.status(201);
            const data = {"message": "Not found Arts"};
            res.json(data);
        }
        else{
            res.status(200);
            res.json(result[0]);
        }
    });
 };

 exports.getArtsRevision = (req, res) => {
    const id = req.params.id;
    const sql = "select art_id from Art where client_id = '"+id+"' and status = '"+datas.art_status["revision"]+"'"; //revision
    global.db_connection.query(sql, function (err, result) {
        if (err) throw err;
        
        if(result.length != 1){
            res.status(201);
            const data = {"message": "Not found Arts"};
            res.json(data);
        }
        else{
            res.status(200);
            res.json(result[0]);
        }
    });
 };

 exports.getArtsCompleted = (req, res) => {
    const id = req.params.id;
    const sql = "select art_id from Art where client_id = '"+id+"' and status = '"+datas.art_status["complete"]+"'"; //completed
    global.db_connection.query(sql, function (err, result) {
        if (err) throw err;
        
        if(result.length != 1){
            res.status(201);
            const data = {"message": "Not found Arts"};
            res.json(data);
        }
        else{
            res.status(200);
            res.json(result[0]);
        }
    });
 };


/********* PUT *********/
 exports.putBalance = (req, res) => {
    const id = req.body.id;
    const new_balance = req.body.general_balance;
    const sql = "update User_Client set general_balance = "+new_balance+" where user_id = '"+id+"'";
    global.db_connection.query(sql, function (err, result) {
        if (err) {throw err}
        else{
            res.status(200).send("Balance updated successfully!");
        }
    });

 };
