let fornecedorService = require('../services/fornecedor')

const getFornecedores = async (req, res, next) => {
    try {
        await fornecedorService.getFornecedor()
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

const postFornecedores = async (req, res, next) => {
    try {
        await fornecedorService.postFornecedores(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

module.exports.getFornecedores = getFornecedores
module.exports.postFornecedores = postFornecedores