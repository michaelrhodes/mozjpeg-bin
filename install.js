var os = require('os')
var path = require('path')
var build = require('bin-build')

var src = 'https://github.com/mozilla/mozjpeg/releases/download/v3.1/mozjpeg-3.1-release-source.tar.gz'
var dest = path.join(__dirname, '/bin')
var cores = os.cpus().length

build()
  .src(src)
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
  .cmd('make --jobs=' + cores)
  .cmd('make install --jobs=' + cores)
  .run(function (err) {
    if (err) return console.error(err)
  })
