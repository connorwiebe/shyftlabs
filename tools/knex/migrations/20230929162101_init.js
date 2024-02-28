/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable('students', (table) => {
    table.uuid('id', { primaryKey: true })
    table.text('name').notNullable()
    table.text('email').notNullable()
    table.timestamp('created').defaultTo(knex.fn.now()).notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTable('students')
}
