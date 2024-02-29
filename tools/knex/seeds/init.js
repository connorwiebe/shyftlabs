const { faker } = require('@faker-js/faker')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const fakeStudentsData = Array.from({ length: 5 }, (v, i) => {
    return {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      created: faker.date.past()
    }
  })

  await knex('students').del()
  await knex('students').insert(fakeStudentsData)
}
