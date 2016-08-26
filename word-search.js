#!/usr/bin/env node

const { createReadStream } = require('fs')
const es = require('event-stream') // map & split

const { Limiter } = require('./limit-ten')
const readStream = createReadStream('/usr/share/dict/words', { highWaterMark: 100 })

const [,,...args] = process.argv
if (process.argv.length !== 3) {
  readStream.on('end', () => {
    console.log(`You didn't use enter a search term`)
  })
} else {
  const searchTerm = args[0].toLowerCase()
}


readStream
  .pipe(es.split())
  .pipe(es.map((word, cb) => {
    let ind = word.toLowerCase().indexOf(searchTerm);
    if (ind === 0) {
      cb(null, word)
    }
    cb()
  }))
  .pipe(Limiter)
  .pipe(process.stdout)
