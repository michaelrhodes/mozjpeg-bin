var test = require('tape')
var check = require('bin-check')

test('it works', function (assert) {
  assert.plan(3)

  check(require('./cjpeg'), ['-version'])
    .then(function (nonzero) {
      assert.ok(nonzero, 'returned non-zero exit code')
    })
    .catch(function (err) {
      assert.fail(err.message)
    })

  check(require('./djpeg'), ['-version'])
    .then(function (nonzero) {
      assert.ok(nonzero, 'returned non-zero exit code')
    })
    .catch(function (err) {
      assert.fail(err.message)
    })

  check(require('./jpegtran'), ['-version'])
    .then(function (nonzero) {
      assert.ok(nonzero, 'returned non-zero exit code')
    })
    .catch(function (err) {
      assert.fail(err.message)
    })
})
