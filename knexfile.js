const migrations = {
  directory: './tools/knex/migrations',
  tableName: 'knex_migrations'
}

const seeds = {
  directory: './tools/knex/seeds'
}

const local = {
  client: 'pg',
  connection: {
    database: 'shyftlabs'
  },
  migrations,
  seeds
}

const dbconfig = {
  client: 'pg',
  connection: {
    host: process.env.HOST,
    user: process.env.USER,
    port: process.env.PORT,
    database: process.env.DATABASE
  },
  migrations,
  seeds
}

const config = {
  local,
  test: local,
  production: dbconfig
}

module.exports = config
