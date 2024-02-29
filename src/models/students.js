const db = require('../config/db')

const getStudents = () => {
  return db('students')
}

const createStudent = async (data) => {
  const [student] = await db('students').insert(data).returning('*')
  return student
}

module.exports = {
  getStudents,
  createStudent
}
