const fs = require('fs')

const readStream = fs.createReadStream('./docs/post03.md', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/post03-copy.md')

// readStream.on('data', (chunk) => {
//     console.log('\n\n-----NEW CHUNK-----\n\n')
//     console.log(chunk)
//     writeStream.write('\nNEW CHuNK\n')
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)