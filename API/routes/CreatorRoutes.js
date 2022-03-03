const CreatorController = require('../Controllers/CreatorController');

//body-parser
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = (app) => {
    app.get('/creator/:id', jsonParser,CreatorController.getCreator);
    app.get('/creator/balance/:id', jsonParser, CreatorController.getBalance);
    app.get('/creator/art/ongoing/:id', jsonParser, CreatorController.getArtsOngoing);
    app.get('/creator/art/creating/:id', jsonParser, CreatorController.getArtsCreating);
    app.get('/creator/art/revision/:id', jsonParser, CreatorController.getArtsRevision);
    app.get('/creator/art/completed/:id', jsonParser, CreatorControllerentController.getArtsCompleted);
    app.put('/creator/balance', jsonParser, CreatorController.putBalance);
    app.put('/creator/art', jsonParser, CreatorController.putArt);
}