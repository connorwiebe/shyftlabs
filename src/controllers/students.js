const { asyncHandler } = require('../utils/helpers')
const studentsService = require('../services/students')

const getStudents = asyncHandler(async (req, res, next) => {
  const students = await studentsService.getStudents()

  return res.status(200).json(students)
})

const createStudent = asyncHandler(async (req, res, next) => {
  const student = await studentsService.createStudent(req.body)

  return res.status(200).json(student)
})

module.exports = {
  getStudents,
  createStudent
}
