const imageValidation = (req, res, next) => {
  const contentType = req.headers['content-type'];
  const contentLength = parseInt(req.headers['content-length']);
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
  const maxSize = 1024 * 1024

  // if (!allowedTypes.includes(contentType)) {
  //   return res.status(400).json({error: 'Invalid content type'}) //TODO: Make it works
  // }

  if (contentLength > maxSize) {
    return res.status(400).json({error: 'file is too large'})
  }
  next()
}

module.exports = {imageValidation}