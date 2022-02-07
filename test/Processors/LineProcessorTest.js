
const { expect } = require('chai')
const { describe, it } = require('mocha')
const LineProcessor = require('../../utils/Processors/LineProcessor')

describe('LineProcessor', () => {
  it('test', () => {
    let line = 'Goober,1995-05-15,(+01) 522-475-89-27,904 Portage Pass,4911756205994022338,gstetson1n@nbcnews.com'
    let processor = new LineProcessor(line)
    expect(processor.validate()).to.be.true
  })
})
