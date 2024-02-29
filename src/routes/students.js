const student = require('express').Router()
const studentsController = require('../controllers/students')

student.get('/', studentsController.getStudents)

module.exports = student
