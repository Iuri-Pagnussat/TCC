const fornecedorController = require('../controllers/fornecedor');

module.exports = (app) => {
    app.get('/fornecedor', fornecedorController.getFornecedores),
    app.post('/fornecedor', fornecedorController.postFornecedores)
}