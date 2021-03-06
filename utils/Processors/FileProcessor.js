const Sequelize = require('sequelize');
const Contact = require("../../models/Contact");
const { CreditCardValidator } = require('../CreditCardValidator/CreditCardValidator');
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
        let validator = new CreditCardValidator(creditCard)
        let franchise = validator.getFranchise()
        contacts.push({
          userId: this.contactFile.userId,
          name,
          dob,
          phone,
          address,
          creditCard: creditCard.substring(creditCard.length - 4, creditCard.length),
          franchise,
          email
        })
      }
    }
    this.bulkSave(contacts)
  }

  bulkSave(contacts) {
    Contact.bulkCreate(contacts)
      .then(() => {
        console.log('success');
      })
  }
}

module.exports = FileProcessor
