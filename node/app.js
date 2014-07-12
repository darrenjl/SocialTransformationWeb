var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash    = require('connect-flash');
var session      = require('express-session');
var configDB = require('./config/database.js');
var app = express();

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/socialtransformation');

var mongoose = require('mongoose/');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
 

 // configuration ===============================================================
mongoose.connect(configDB.url); 
require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

app.use(favicon());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

var routes = require('./routes/index');
var users = require('./routes/users');
app.use('/', routes);
app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
