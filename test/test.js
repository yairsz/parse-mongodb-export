var assert = require('assert')
var fs = require('fs')
var os = require('os')
var path = require('path')
var rimraf = require('rimraf')
var pme = require('../')

/* global describe it beforeEach afterEach */

describe('parse-mongodb-export', function () {
  var TEST_DIR

  beforeEach(function (done) {
    TEST_DIR = path.join(os.tmpdir(), 'pme-tests')
    rimraf(TEST_DIR, function () {
      fs.mkdir(TEST_DIR, function () {
        fs.createReadStream('./test/parse.json').pipe(fs.createWriteStream(TEST_DIR + '/parse.json'))
        done()
      })
    })
  })

  afterEach(function (done) {
    rimraf(TEST_DIR, done)
  })

  describe('empty', function () {
    it('should default to undefined', function () {
      assert.strictEqual(pme.empty, undefined)
    })
  })
})
