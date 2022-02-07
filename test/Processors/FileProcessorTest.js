const { describe, it } = require('mocha')
const Sequelize = require('sequelize')
const Contact = require('../../models/Contact')

describe('FileProcessor', (done) => {
  it('test', () => {
    Contact.findAll({
      attributes: [
        [Sequelize.fn('DISTINCT', Sequelize.col('email')), 'email']
      ]
    }).then(contacts => {
      let unique = {}
      for (const contact of contacts) {
        console.log('test1');
        console.log('email', contact.email);
        if (!this.emails[contact.email]) {
          unique[contact.email] = true
        }
      }
      console.log("unqiue", unique);
      done()
    }).catch(done)
  })
})
