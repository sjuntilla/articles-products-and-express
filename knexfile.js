require('dotenv').config();

module.exports = {
  client: 'pg',
  connection: {
    port: process.env.POSTGRES_HOST_PORT = 8765,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};