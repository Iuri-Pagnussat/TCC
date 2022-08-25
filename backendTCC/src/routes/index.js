const Fornecedores = require('./fornecedor')
const Item = require('./item')

module.exports = (app) => {
    Fornecedores(app)
    Item(app)
}