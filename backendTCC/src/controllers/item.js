let itemService = require('../services/item')

const getItem = async (req, res, next) => {
    try {
        await itemService.getItem()
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

const postItem = async (req, res, next) => {
    try {
        await itemService.postItem(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    } catch (err) {
        next(err);
    }
}

module.exports.getItem = getItem
module.exports.postItem = postItem