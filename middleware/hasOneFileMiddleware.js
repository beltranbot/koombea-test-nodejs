module.exports = (req, res, next) => {
  if (Object.keys(req.files).length === 0) {
    return res.send(422, {
      message: 'No file uploaded'
    })
  }
  if (Object.keys(req.files).length !== 1) {
    return res.send(422, {
      message: 'Only one file can be uploaded at the time'
    })
  }
  let filename = Object.keys(req.files)[0]
  if (filename.length >= 255) {
    return res.send(422, {
      message: 'Filename is too long'
    })
  }
  return next()
}
