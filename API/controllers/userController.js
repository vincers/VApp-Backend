const user_util = require("../data/User.js");

exports.getUser = (req, res) => {
   const id = req.params.id;
   data = user_util.getById(id,function(err,result){
      if(err){
         res.status(404);
         const data = {"message": "User not found"};
         res.json(data);
      }
      else{
         res.status(200);
         res.json(result);
      }
   }
      );
};

