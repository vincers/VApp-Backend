const UserController = require('../Controllers/userController');
module.exports = (app) => {
   app.get('/user/:id', UserController.getUser);
}
