// Setting up the server

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var passport = require('passport');
var mongoose = require('mongoose');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var path = require('path');
var configDB = require('./config/database.js');

var morgan = require('morgan');

//mongoose.connect(configDB.url);

require('./config/passport')(passport); // pass passport for configuration
// for debuging see all post and gets from webpage
app.use(morgan('dev'));

//used for local files
app.use(express.static(path.join(__dirname, './views')));

// 
app.use(cookieParser());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());
// Change to html if you want
app.set('view engine', 'ejs');

/*Passportjs*/
app.use(session({ 
	secret: 'Iamjusttesting',
    resave: true,
    saveUninitialized: true 

}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/*Routes*/
require('./app/routes.js')(app, passport); 

/*Start the application locally*/
app.listen(port);
console.log('app is listening on port: ' + port);