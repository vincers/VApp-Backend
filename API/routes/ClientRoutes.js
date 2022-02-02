const ClientController = require('../Controllers/clientController');
module.exports = (app) => {
   app.get('/client/:id', ClientController.getClient);
   app.get('/typeclient/:id', ClientController.getTypeClient);
   app.get('/client/balance/:id', ClientController.getBalance);
   app.get('/client/art/ongoing/:id', ClientController.getArtsOngoing);
   app.put('/client/balance', ClientController.putBalance);
}