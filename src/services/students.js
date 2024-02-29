const studentsModel = require('../models/students')

const getStudents = async () => {
  const students = await studentsModel.getStudents()
  return students
}

module.exports = {
  getStudents
}
