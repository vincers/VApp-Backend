const types = ['User_Client_Master', 'User_Creator', 'User_Admin' ];

exports.getById_Type = (id, type_index) => {
    /****** Find User by ID and Type  ******
     * 
     ** params: id, 
     *          type
     ** return: null or <user data>
     * 
    */
    const sql = "select * from "+types[type_index-1]+" where user_id = '"+id+"'";
    global.db_connection.query(sql, function (err, result) {
        if (err) throw err;
        
        if(result.length != 1){
            return null;
        }
        else{
            return result[0];
        }
    });
};

exports.getById = (id) => {
    /****** Find User by ID ******
     * 
     ** params: id
     ** return: user or null
     * 
    */
    const sql = "select * from "+types[0]+" where user_id = '"+id+"'";
    global.db_connection.query(sql, function (err, result) {
        if (err) throw err;
        if(result.length != 1){
            const sql = "select * from "+types[1]+" where user_id = '"+id+"'";
            global.db_connection.query(sql, function (err, result) {
                if (err) throw err;
                if(result.length != 1){
                    const sql = "select * from "+types[2]+" where user_id = '"+id+"'";
                    global.db_connection.query(sql, function (err, result) {
                        if (err) throw err;
                        if(result.length != 1){
                            return  null;
                        }
                        else{
                            return result[0];
                        }
                    });
                }
                else{
                    return result[0];
                }
            });
        }
        else{
            return result[0];
        }
    });
};

exports.insertUser = (hash_email, data) =>{
     /****** New User  ******
     * 
     ** params: hash_email, 
     *          .json file 
     *              {<user data>}
     ** return: boolean
     * 
    */
    const sql = "insert into "+types[data.body.user_type+1]+" (user_id) values ('"+hash_email+"')";
     global.db_connection.query(sql, function (err, result) {
        if (err){
            console.log(err);
            return false;
        }
        else{
            return true;
        }
    });
};