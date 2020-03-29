const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
/**
 * rotas/recursos
 */
/**
 * Métodos HTTP
 * GET: Buscar/Listar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no vack-end
 * DELETE: Deletar uma informação no back-end
 */
/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rote  após "?" (Filtros Paginação)
 * Rout Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou auterar os recursos   
 */

 /**
  * Banco de Dados:
  * (Relacionais)SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * (Não Relacionais)NoSQL: MongoDB, CouchDB, etc
  * Vamos usar o SQLite (KNex)
  */

  /**
   * Driver de Banco de dados
   * Driver: SELECT * FROM users
   * (Usando JavaScript)Query Builder: table('users').select('*').where()
   * "Usaremos o knex"
   */

