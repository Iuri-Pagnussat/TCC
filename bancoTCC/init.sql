CREATE TABLE fornecedor (
cod_fornecedor INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
nome_fornecedor VARCHAR(30) NOT NULL,
cnpj VARCHAR(18),
email VARCHAR(40),
telefone VARCHAR(16)
);

CREATE TABLE item (
cod_item INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
descricao_item VARCHAR(40),
marca VARCHAR(25),
valor NUMERIC(10,2) NOT NULL,
undmedida VARCHAR(3)
);

CREATE TABLE orcamento (
nome_orcamento VARCHAR(30),
descricao_orcamento VARCHAR(70)
);