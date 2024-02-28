const data = require('express').Router()
const dataController = require('../controllers/data')

data.get('/', dataController.getData)

module.exports = data
