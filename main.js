const express = require('express')
const handlebars = require('express-handlebars')
const app = express() //Creates an express application

let server = require('http').createServer(app)

app.set('view engine', 'hbs')
//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    defaultLayout: 'main',
    extname: 'hbs' //new configuration parameter
}))

const homeRoute = require('./routes/home.router')

//Route Middlewares
app.use('/', homeRoute)

app.use(express.static('public')) //used for stylesheets

server.listen(process.env.ACCESS_PORT || 3000, '0.0.0.0', function () {
    console.log("Server is currently running on PORT " + (process.env.PORT || 3000));
});