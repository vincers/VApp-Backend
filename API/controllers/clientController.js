const user_util = require("../data/User.js");
const datas = require("../data/data.json");

/********* GET *********/
exports.getClient = (req, res) => {
   const id = req.params.id;
   user_util.getById_Type(id,2,function(err,result){
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
    const sql = "select user_type from "+datas.user_type[2]+"where user_id = '"+id+"'";
    global.db_connection.query(sql, function (err, result) {
        if (err) throw err;
        
        if(result.length != 1){
            res.status(404);
            const data = {"message": "User not found"};
            res.json(data);
        }
        else{
            res.status(200);
            const data = {"type": datas.client_type[result[0].type - 1],
                          "type_index": result[0].type };//0 or 1 ?? 1 or 2??
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
    const sql = "select art_id from Art where user_id = '"+id+"' and status != '"+datas.art_status[4]+"'"; //completed
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
    const sql = "select art_id from Art where user_id = '"+id+"' and status = '"+datas.art_status[0]+"'"; //new
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
    const sql = "select art_id from Art where user_id = '"+id+"' and status = '"+datas.art_status[1]+"'"; //waiting
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
    const sql = "select art_id from Art where user_id = '"+id+"' and status = '"+datas.art_status[2]+"'"; //creating
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
    const sql = "select art_id from Art where user_id = '"+id+"' and status = '"+datas.art_status[3]+"'"; //revision
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
    const sql = "select art_id from Art where user_id = '"+id+"' and status = '"+datas.art_status[4]+"'"; //completed
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

 exports.getMoodboard = (req, res) => {
    const id = req.params.id;
    const sql = "select * from Moodboard where user_id = '"+id+"'"; //completed
    global.db_connection.query(sql, function (err, result) {
        if (err) throw err;
        
        if(result.length != 1){
            res.status(201);
            const data = {"message": "Not found Moodboard"};
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
    const sql = "update "+datas.user_type[2]+" set general_balance = "+new_balance+" where user_id = '"+id+"'";
    global.db_connection.query(sql, function (err, result) {
        if (err) {throw err}
        else{
            res.status(200).send("Balance updated successfully!");
        }
    });

 };

 exports.putMoodboard = (req, res) => {
    const id = req.body.id;
    const new_color = req.body.color;
    const new_font = req.body.font;
    const new_images = req.body.images;
    const sql = "update "+datas.user_type[2]+" set color = '"+new_color+"', font = '"+new_font+"', images = '"+new_images+"' where user_id = '"+id+"'";
    global.db_connection.query(sql, function (err, result) {
        if (err) {throw err}
        else{
            res.status(200).send("Moodboard updated successfully!");
        }
    });

 };