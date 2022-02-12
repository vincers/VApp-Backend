
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

exports.putMoodboard = (req, res) => {
    const id = req.body.id;
    const new_color = req.body.color;
    const new_font = req.body.font;
    const new_images = req.body.images;
    const sql = "update Moodboard set color = '"+new_color+"', font = '"+new_font+"', images = '"+new_images+"' where user_id = '"+id+"'";
    global.db_connection.query(sql, function (err, result) {
        if (err) {throw err}
        else{
            res.status(200).json({"message": "Moodboard updated successfully!"});
        }
    });

 };