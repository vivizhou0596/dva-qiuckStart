const mock = {}
require('fs').readdirSync(require('path').join(__dirname + '/mock')).forEach(function(file) {
  console.log(file)
  Object.assign(mock, require('./mock/' + file))
})
module.exports = mock
