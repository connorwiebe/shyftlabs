require('dotenv').config()

const express = require('express')
const statuses = require('statuses')

const studentsRoutes = require('./routes/students')

const app = express()

app.use(express.json())

app.listen(2222)

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`)
  next()
})

app.use('/api/students', studentsRoutes)

app.use((err, req, res, next) => {
  /* eslint-disable no-console */
  console.log(`err ->`, err)

  const status = err.statusCode || 500
  const message = err.userMessage ?? statuses(status)

  return res.status(status).json({
    status,
    message
  })
})
