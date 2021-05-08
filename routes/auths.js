const controller = require('../controllers/auth');

const router = (express) => { // Inyección de dependencia de express (librería) -> (routerConfig)

    const api = express.Router();

    api.post('/loginP', controller.loginP)
    api.post('/logoutP', controller.logoutP)
    api.post('/loginT', controller.loginT)
    api.post('/logoutT', controller.logoutT)

    return api;
};

module.exports = router;