const types = ['User_Client_Master', 'User_Creator', 'User_Admin' ];

exports.getById_Type = (id, type_index) => {
    const sql = "select * from "+types[type_index+1]+" where user_id = '"+id+"'";
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

exports.postUser = (hash_email, data) =>{
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