const ClientController = require('../Controllers/clientController');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

module.exports = (app) => {
   app.get('/client/:id', jsonParser,ClientController.getClient);
   app.get('/typeclient/:id', jsonParser, ClientController.getTypeClient);
   app.get('/client/balance/:id', jsonParser, ClientController.getBalance);
   app.get('/client/art/ongoing/:id', jsonParser, ClientController.getArtsOngoing);
   app.get('/client/art/new/:id', jsonParser, ClientController.getArtsNew);
   app.get('/client/art/waiting/:id', jsonParser, ClientController.getArtsWaiting);
   app.get('/client/art/creating/:id', jsonParser, ClientController.getArtsCreating);
   app.get('/client/art/revision/:id', jsonParser, ClientController.getArtsRevision);
   app.get('/client/art/completed/:id', jsonParser, ClientController.getArtsCompleted);
   app.get('/client/moodboard/:id', jsonParser, ClientController.getMoodboard);
   app.put('/client/moodboard', jsonParser, ClientController.putMoodboard);
   app.put('/client/balance', jsonParser, ClientController.putBalance);
} 