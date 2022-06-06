const fs = require('fs')


fs.readFile('./docs/post01.md', (err, data) => {

    if (err) {
        console.log(err)
    }
    console.log(data.toString())

})