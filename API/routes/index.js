const UserRoute = require('./UserRoute');
const LoginRoute = require('./LoginRoutes');
const ClientRoute = require('./ClientRoutes');

module.exports = (app) => {
   UserRoute(app),
   LoginRoute(app),
   ClientRoute(app)
}
