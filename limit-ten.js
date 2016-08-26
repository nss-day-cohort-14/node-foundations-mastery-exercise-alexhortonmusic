const { Transform } = require('stream')

const Limiter = Transform()

Limiter._transform = (buff, encoding, cb) => {
  buffer = buff.toString() + '\n'
  cb(null, buffer)
}

module.exports = { Limiter };
// module.exports = Transform({
//   //enhanced object literal
//   limiter (buff, enc, cb) {
//     cb(null, buff.toString())
//     console.log(buff.toString())
//   }
// })
