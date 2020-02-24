// Imports
const express = require('express')
const { join } = require('path')
const app = express()

// Middleware
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// require('./routes')(app)

// Listen
app.listen(process.env.PORT || 3001)