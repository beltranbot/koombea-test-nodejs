const AWS = require('aws-sdk')
const config = require('../config')
const s3 = new AWS.S3({
  accessKeyId: config.AWS.id,
  secretAccessKey: config.AWS.secret
})

exports.postContacFiles = (req, res) => {
  let filename = Object.keys(req.files)[0]
  let contacts = req.files[filename]
  let timestamp = Date.now()
  const params = {
    Bucket: config.AWS.bucket_name,
    Key: 'contacts__' + timestamp,
    Body: contacts.data
  }
  s3.upload(params, (err) => {
    if (err) {
      console.log('err:', err);
    }
  })
  res.status(201).send({
    message: 'QUEUED'
  })
}
