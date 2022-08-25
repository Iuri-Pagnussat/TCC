const db = require('../configs/pg')

const sql_get =
`select cod_fornecedor,
        nome_fornecedor,
        cnpj,
        email,
        telefone
   from fornecedor`

const getFornecedor = async () => {
    let fornecedor = {}
    await db.query(sql_get)
        .then(ret => fornecedor = { total: ret.rows.length, fornecedor: ret.rows })
        .catch(err => fornecedor = err.stack)
    return fornecedor
}

const sql_insert =
    `insert into fornecedor (nome_fornecedor, cnpj, email, telefone)
    values ($1, $2, $3, $4)`
const postFornecedores = async (params) =>  {
    const {nome_fornecedor, cnpj, email, telefone } = params
    await db.query(sql_insert, [nome_fornecedor, cnpj, email, telefone])
}

module.exports.getFornecedor = getFornecedor
module.exports.postFornecedores = postFornecedores