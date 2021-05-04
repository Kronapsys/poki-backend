const controller = require('../controllers/notification');

const router = (express) => { // Inyección de dependencia de express (librería) -> (routerConfig)

    const api = express.Router();

    api.post('/', controller.create) // Unimos método de API (post) con el endpoint ('/') y metodo de controlador (create)
    api.get('/', controller.read)
    api.get('/:id', controller.readById)
    api.put('/:id', controller.updateById)
    api.delete('/:id', controller.deleteById)

    return api;
};

module.exports = router;