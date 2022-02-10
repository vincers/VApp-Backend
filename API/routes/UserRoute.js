const UserController = require('../Controllers/userController');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = (app) => {
   app.get('/user/:id', UserController.getUser);
}
