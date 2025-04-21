const path = require('path')
const express = require('express')
const morgan = require('morgan')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = 3000   

// Template engine
app.engine('hbs', expressHandlebars.engine({extname: '.hbs', partialsDir: __dirname + '/views/partial',}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// HTTP logger 
app.use(morgan('combined'))

// định nghĩa route 
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
