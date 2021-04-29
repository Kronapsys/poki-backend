const controller = require('../controllers/lack-of-assistance-type');

const router = (express) => {
    const api = express.Router();

    api.post('/', controller.create)
    api.get('/', controller.read)
    api.get('/:id', controller.readById)
    api.put('/:id', controller.updateById)
    api.delete('/:id', controller.deleteById)
    
    return api;
};

module.exports = router;