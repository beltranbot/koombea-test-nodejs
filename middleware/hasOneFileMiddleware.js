module.exports = (req, res, next) => {
  if (!req.files) {
    return res.status(422)
      .send({
        message: 'No file uploaded'
      })
  }
  if (Object.keys(req.files).length === 0) {
    return res.status(422)
      .send({
        message: 'No file uploaded'
      })
  }
  if (Object.keys(req.files).length !== 1) {
    return res.status(422)
      .send({
        message: 'Only one file can be uploaded at the time'
      })
  }
  let filename = Object.keys(req.files)[0]
  if (filename.length >= 255) {
    return res.status(422)
      .send({
        message: 'Filename is too long'
      })
  }
  return next()
}
