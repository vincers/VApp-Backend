
const user_util = require("../data/User.js");
const datas = require("../data/data.json");

/********* GET *********/
exports.getCreator = (req, res) => {
   const id = req.params.id;
   user_util.getById_Type(id,"creator",function(err,result){// ver o nome no banco
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

 exports.getBalance = (req, res) => {
    const id = req.params.id;
    user_util.getById_Type(id,"creator",function(err,result){ // ver o nome no banco
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
    const sql = "select art_id from Art where creator_id = '"+id+"' && (status = '"+datas.art_status["new"]+"' or status = '"+datas.art_status["wait"]+"' or status = '"+datas.art_status["create"]+" ') ORDER BY UNIX_TIMESTAMP(request_time) DESC "; 
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
    const sql = "select art_id from Art where creator_id = '"+id+"' && status = '"+datas.art_status["create"]+"' ORDER BY UNIX_TIMESTAMP(request_time) ASC"; 
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
    const sql = "select art_id from Art where creator_id = '"+id+"' && status = '"+datas.art_status["revision"]+"' ORDER BY UNIX_TIMESTAMP(request_time) ASC"; 
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
    const sql = "select art_id from Art where creator_id = '"+id+"' && status = '"+datas.art_status["complete"]+"' ORDER BY UNIX_TIMESTAMP(request_time) DESC"; 
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
    const sql = "update User_Creator set general_balance = "+new_balance+" where user_id = '"+id+"'";
    global.db_connection.query(sql, function (err, result) {
        if (err) {throw err}
        else{
            res.status(200).send("Balance updated successfully!");
        }
    });

 };

exports.putArt = (req, res) => {
    const id = req.params.id;
    const final_file = req.params.final_file;
    const date = Date.now();
    const sql = "update  Art set  final_file = '"+final_file+"', delivery_time = "+data+" where art_id = "+id; 

    global.db_connection.query(sql, function (err, result) {
        if (err) throw err;
        
        if(result.length != 1){
            res.status(201);
            const data = {"message": "Not found Arts"};
            res.json(data);
        }
        else{
            res.status(200);
            res.json({"message": "Deu certo!"});
        }
    });

 };