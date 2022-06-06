const fs = require('fs')


// fs.readFile('./docs/post01.md', (err, data) => {

//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString())

// })

// fs.writeFile('./docs/post02.md', '# This is the second blog post', () => {
//     console.log('post02 saved.')
// })

if (!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err)
    }
    console.log('folder created')
})}