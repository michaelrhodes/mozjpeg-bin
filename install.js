var os = require('os')
var path = require('path')
var build = require('bin-build')
var pkg = require('./package.json')

var dest = path.join(__dirname, '/bin')
var cores = os.cpus().length

build()
  .src('https://github.com/mozilla/mozjpeg/archive/v' + pkg.version + '.tar.gz')
  .cmd('autoreconf -fiv')
  .cmd([
    './configure',
    '--disable-shared',
    '--disable-dependency-tracking',
    '--with-jpeg8',
    '--prefix="' + dest + '"',
    '--bindir="' + dest + '"',
    '--libdir="' + dest + '"'
  ].join(' '))
  .cmd('make -j' + cores)
  .cmd('make install -j' + cores)
  .run(function (err) {
    if (err) return console.error(err)
  })
