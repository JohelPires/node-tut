const data = require('./data')
const os = require('os')

console.log(data.users, data.ages)

console.log(os.totalmem() / 1024 / 1024)