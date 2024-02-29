const { asyncHandler } = require('../utils/helpers')
const studentsService = require('../services/students')

const getStudents = asyncHandler(async (req, res, next) => {
  const students = await studentsService.getStudents()

  return res.status(200).json(students)
})

module.exports = {
  getStudents
}
