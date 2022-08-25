const db = require('../configs/pg')

const sql_get =
`select cod_item,
        descricao_item,
        marca,
        valor,
        undmedida
   from item`

const getItem = async () => {
    let item = {}
    await db.query(sql_get)
        .then(ret => item = { total: ret.rows.length, item: ret.rows })
        .catch(err => item = err.stack)
    return item
}

const sql_insert =
    `insert into item (descricao_item, marca, valor, undmedida)
    values ($1, $2, $3, $4)`
const postItem = async (params) =>  {
    const {descricao_item, marca, valor, undmedida } = params
    await db.query(sql_insert, [descricao_item, marca, valor, undmedida])
}

module.exports.getItem = getItem
module.exports.postItem = postItem