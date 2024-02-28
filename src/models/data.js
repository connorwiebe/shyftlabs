const db = require('../config/db')

const getData = () => {
  return db('data')
}

module.exports = {
  getData
}
