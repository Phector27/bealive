require('dotenv').config()

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debug.config')

// App
const express = require('express')
const app = express()

// Configs
require('./configs/middleware.config')(app)
require('./configs/locals.config')(app)
require('./configs/cors.config')(app)
require('./configs/passport.config')(app)

// Routes index
require('./routes')(app)

module.exports = app
