const { asyncHandler } = require('../utils/helpers')
const dataService = require('../services/data')

const getData = asyncHandler(async (req, res, next) => {
  const data = await dataService.getData()

  return res.status(200).json(data)
})

module.exports = {
  getData
}
