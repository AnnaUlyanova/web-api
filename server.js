var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var userRoutes = require('./routes/users')
var activityRoutes = require('./routes/activities')

var server = express()

module.exports = server

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(bodyParser.json())

// Routes

server.use('/users', userRoutes)
server.use('/activities', activityRoutes)
