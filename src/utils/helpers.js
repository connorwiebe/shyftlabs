const Err = (statusCode, message, userMessage) => {
  const err = new Error(message)
  err.statusCode = statusCode
  err.userMessage = userMessage
  return err
}

const asyncHandler = (fn) => {
  return (req, res, next) => {
    return fn(req, res, next).catch(next)
  }
}

module.exports = {
  Err,
  asyncHandler
}
