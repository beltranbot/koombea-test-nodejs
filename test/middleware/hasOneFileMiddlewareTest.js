const { describe, it } = require('mocha')
const sinon = require('sinon')
const chance = require('chance').Chance()
const hasOneFileMiddleware = require('../../middleware/hasOneFileMiddleware');


describe('hasOneFileMiddleware', () => {
  it('should return status 422 if request doesn\'t contain a files field', () => {
    // test chained methods
    const req = {}
    const res = {
      status: () => { },
      send: () => { }
    }
    const resMock = sinon.mock(res)
    resMock.expects('status')
      .once()
      .withArgs(422)
      .returnsThis()
    resMock.expects('send')
      .once()
      .withArgs({
        message: 'No file uploaded'
      })
    hasOneFileMiddleware(req, res, null)
    resMock.restore()
  })

  it('should return status 422 if request doesn\'t contain a file', () => {
    const req = {
      files: {}
    }
    const res = {
      send: () => { },
      status: () => { }
    }
    const resMock = sinon.mock(res)
    resMock.expects('status').once().withArgs(422).returnsThis()
    resMock.expects('send').once().withArgs({
      message: 'No file uploaded'
    })
    hasOneFileMiddleware(req, res, null)
    resMock.restore()
  })

  it('should return status 422 if request contains more than one file', () => {
    const req = {
      files: {
        file1: [],
        file2: []
      }
    }
    const res = {
      send: () => {},
      status: () => {}
    }
    const resMock = sinon.mock(res)
    resMock.expects('status').once().withArgs(422).returnsThis()
    resMock.expects('send').once().withArgs({
      message: 'Only one file can be uploaded at the time'
    })
    hasOneFileMiddleware(req, res, null)
    resMock.restore()
  })

  it('should return status 422 if filename is too long', () => {
    let filename = chance.string({length: 256, symbols: false, alpha: true})
    const req = {
      files: {}
    }
    req.files[filename] = ''
    const res = {
      send: () => {},
      status: () => {},
    }
    const resMock = sinon.mock(res)
    resMock.expects('status').once().withArgs(422).returnsThis()
    resMock.expects('send').once().withArgs({
      message: 'Filename is too long'
    })
    hasOneFileMiddleware(req, res, null)
    resMock.restore()
  })

  it('should call next if file is valid', () => {
    const req = {
      files: {
        test: ''
      }
    }
    const res = {}
    const next = {
      next : () => {}
    }
    const nextMock = sinon.mock(next)
    nextMock.expects('next').once().withArgs()
    hasOneFileMiddleware(req, res, next.next)
    nextMock.restore()
  })
})
