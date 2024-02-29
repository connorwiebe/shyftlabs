const studentsModel = require('../models/students')

const getStudents = async () => {
  const students = await studentsModel.getStudents()
  return students
}

const createStudent = async (data) => {
  const student = await studentsModel.createStudent(data)
  console.log(`student ->`, student)
  return student
}

module.exports = {
  getStudents,
  createStudent
}
