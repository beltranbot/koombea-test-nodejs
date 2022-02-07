const AWS = require('aws-sdk')
const config = require('../config')
const ContactFile = require('../models/contactFile')
const FileProcessor = require('../utils/Processors/FileProcessor')

const s3 = new AWS.S3({
  accessKeyId: config.AWS.id,
  secretAccessKey: config.AWS.secret
})

exports.postContacFiles = async (req, res) => {
  const filename = Object.keys(req.files)[0]
  const contacts = req.files[filename]
  const timestamp = Date.now()
  const key = 'contacts_' + req.auth.user.id + '_' + timestamp
  const contactFile = new ContactFile({
    userId: req.auth.user.id,
    originalFilename: filename,
    key,
    state: 'uploading'
  })
  await contactFile.save()
  const params = {
    Bucket: config.AWS.bucket_name,
    Key: key,
    Body: contacts.data
  }
  s3.upload(params, (err, data) => {
    if (err) {
      contactFile.update({
        state: 'failed upload'
      })
      contactFile.save()
      return
    }
    contactFile.update({
      location: data.Location,
      state: 'on hold'
    })
    contactFile.save()
  })
  res.status(201).send({
    message: 'QUEUED'
  })
}

exports.postProcess = async (req, res) => {
  const contact_file_id = req.params.contact_file_id
  const contactFile = await ContactFile.findOne({ where: { id: contact_file_id } })
  if (!contactFile) {
    return res.status(404).send({
      message: 'Contact File not found'
    })
  }
  const params = {
    Bucket: config.AWS.bucket_name,
    Key: contactFile.key
  }
  s3.getObject(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      return res.status(404).send({
        message: 'Error downloading file from S3'
      })
    }
    new FileProcessor(contactFile, data)
  })
  return res.status(200).send({
    message: 'OK'
  })
}

exports.getContactFiles = async (req, res) => {
  const page = req.query.page ? +req.query.page : 0
  const limit = req.query.size ? +req.query.size : 10
  const contactFiles = await ContactFile.findAndCountAll({
    where: { user_id: req.auth.user.id },
    limit,
    offset: page * limit
  })
  const response = getPagingData(contactFiles, page, limit)
  return res.status(200)
    .send(response)
}

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: contact_files } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, contact_files, totalPages, currentPage };
}
