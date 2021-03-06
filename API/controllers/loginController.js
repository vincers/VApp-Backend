const user_util = require("../data/User.js");
const login_util = require("../data/Login.js");

exports.login = (req, res) => {
    /****** Validate login ******
     * 
     ** params: .json file 
     *          {'email' = value,
     *           'password' = value}
     ** return: .json file
     *          error:
     *              {'message' = value}
     *          user found:
     *              {<user data>}
     * 
    */
    const email = req.body.email;
    const pass = req.body.password;
    
    const sql = "select * from Login where email = '"+email+"'";
    global.db_connection.query(sql, function (err, result) {
        if (err) throw err;
        
        if(result.length <= 0) {
            const data = { "message:":"User not found."}
            res.status(404);
            res.json(data);
        }
        else if(result.length > 1){
            const data = { "message:":"Error."}
            res.status(404);
            res.json(data);
        }
        else{
            if(login_util.pass_verify(pass, result[0].password)){
                const user = user_util.getById_Type(result[0].id,result[0].type)
                res.status(200);
                res.json(user);
            }
            else{
                const data = {"message:":"Incorrect Password."}
            res.status(404);
            res.json(data);
            }
        }
    });
 };


 exports.signUp = (req, res) => {
     /****** New User - Sign Up ******
     * 
     ** params: .json file 
     *          {'email' = value,
     *           'password' = value,
     *            <user data>}
     ** return: .json file
     *          error:
     *              {'message' = value}
     *          user found:
     *              {'message' = value}
     * 
    */
     const email = req.body.email;
     const pass = req.body.password;
     const type = req.body.user_type;
     const hash_pass = login_util.pass_hash(pass);
     const sql = "insert into Login (email, password, type) values \
     ('"+email+"', '"+hash_pass+"', "+type+")";
     global.db_connection.query(sql, function (err) {
        if (err){
            const data = { "message:": err}
            res.status(404);
            res.json(data);
        }
        else{
            const sql = "select id from Login where email = '"+email+"';";
                global.db_connection.query(sql, function (err, result) {
                    if (err){
                        console.log(err);
                    }
                    else{
                        const id = result[0].id;
                        user_util.insertUser(id, email, req,function(err){
                            if(err){
                                const data = { "message:":"Error."}
                                const sql = "delete from Login where email = '"+email+"';";
                                global.db_connection.query(sql, function (err) {
                                    if (err){
                                        console.log(err);
                                    }
                                });
                                res.status(404);
                                res.json(data); 
                            }
                            else{
                                const data = { "message:":"Sign Up successful."}
                                res.status(200);
                                res.json(data);
                            }
                        }
                        );
                    }
                });
            }
    });
 }