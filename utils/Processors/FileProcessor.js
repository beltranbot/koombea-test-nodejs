const Sequelize = require('sequelize');
const Contact = require("../../models/Contact");
const LineProcessor = require('./LineProcessor');

class FileProcessor {
  constructor(contactFile, data) {
    this.data = data.Body.toString().split('\n')
    this.contactFile = contactFile
    this.emails = {}
    this.loadEmails()
  }

  async loadEmails() {
    let contacts = await Contact.findAll({
      attributes: [
        [Sequelize.fn('DISTINCT', Sequelize.col('email')), 'email']
      ]
    })
    for (const contact of contacts) {
      if (!(contact.email in this.emails)) {
        this.emails[contact.email] = true
      }
    }
    this.processFile()
  }

  processFile() {
    let contacts = []
    for (const line of this.data) {
      let processor = new LineProcessor(line, this.emails)
      if (processor.validate()) {
        let [name, dob, phone, address, creditCard, email] = line.split(',')
        contacts.push({
          userId: this.contactFile.userId,
          name,
          dob,
          phone,
          address,
          creditCard,
          franchise: 'test',
          email
        })
      }
    }
    this.bulkSave(contacts)
  }

  bulkSave(contacts) {
    Contact.bulkCreate(contacts)
      .then(_ => {
        console.log('success');
      })
  }
}

module.exports = FileProcessor
