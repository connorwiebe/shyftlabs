const db = require('../config/db')

const getStudents = () => {
  return db('students')
}

module.exports = {
  getStudents
}
