const dataModel = require('../models/data')

const getData = async () => {
  const data = await dataModel.getData()
  return data
}

module.exports = {
  getData
}
