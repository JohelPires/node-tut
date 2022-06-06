const express = require('express')

// express app
const app = express()

// registrar view engine
app.set('view engine', 'ejs')


// listen for requestes
app.listen(3000)

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname})
})

// redirects
app.get('/about-me', (req, res) => {
    res.redirect('./views/about.html', { root: __dirname})
})

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname})
})