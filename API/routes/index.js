const UserRoute = require('./UserRoute');
const LoginRoute = require('./LoginRoutes');
module.exports = (app) => {
   UserRoute(app),
   LoginRoute(app)
}
