const itemController = require('../controllers/item');

module.exports = (app) => {
    app.get('/item', itemController.getItem),
    app.post('/item', itemController.postItem)
}