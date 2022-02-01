const LoginController = require('../Controllers/loginController');

//body-parser
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = (app) => {
    app.post('/login', jsonParser ,LoginController.login);
    app.post('/signup', jsonParser ,LoginController.signUp);
}