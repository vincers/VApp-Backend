const datas = require("../data/data.json");

module.exports = {
    getById_Type: function(id, type_index,callback){
        /****** Find User by ID and Type  ******
         * 
         ** params: id, 
         *          type
         ** return: null or <user data>
         * 
        */
        const sql = "select * from "+datas.user_type[type_index]+" where user_id = "+id+"";
        global.db_connection.query(sql, function (err, result) {
            if (err) throw err;
            
            if(result.length != 1){
                callback(err, null);
            }
            else{
                callback(null, result[0]);
            }
        });
    },
    getById: function(id ,callback){
        /****** Find User by ID ******
         * 
         ** params: id
         ** return: user or null
         * 
        */
        let sql = "select * from "+datas.user_type[0]+" where user_id = "+id;
         global.db_connection.query(sql, function (err, sql_result) {
            if (err) {console.log("1")};
            if(sql_result.length != 1){
                let sql = "select * from "+datas.user_type[1]+" where user_id = "+id;
                global.db_connection.query(sql, function (err, sql_result) {
                    if (err) {console.log("2")};
                    if(sql_result.length != 1){
                        let sql = "select * from "+datas.user_type[2]+" where user_id = "+id;
                        global.db_connection.query(sql, function (err, sql_result) {
                            if (err) {console.log("3")};
                            if(sql_result.length != 1){
                                callback(err, null);
                            }
                            else{
                                callback(null, sql_result[0]);
                            }
                        });
                    }
                    else{
                        callback(null, sql_result[0]);
                    }
                });
            }
            else{
                callback(null, sql_result[0]);
            }
        });
    },
    insertUser: function(id, email, data, callback){
        /****** New User  ******
        * 
        ** params: id, email, 
        *          .json file 
        *              {<user data>}
        ** return: boolean
        * 
       */
       const sql = "insert into "+datas.user_type[data.body.user_type]+" (user_id, email) values ("+id+",'"+email+"')";
        global.db_connection.query(sql, function (err, result) {
           if (err){
               console.log(err);
               callback(err);
           }
           callback(null);
       });
       
   }
}
