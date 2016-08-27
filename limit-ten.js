const { Transform } = require('stream')

const Limiter = Transform()

let i = 0;
Limiter._transform = (buff, _, cb) => {
  i++;
  if (i < 11) {
    buffer = buff.toString() + '\n'
    cb(null, buffer)
  } else {
    cb()
  }
}

module.exports = { Limiter };
