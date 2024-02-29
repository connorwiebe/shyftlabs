const student = require('express').Router()
const studentsController = require('../controllers/students')

student.get('/', studentsController.getStudents)
student.post('/', studentsController.createStudent)

module.exports = student
