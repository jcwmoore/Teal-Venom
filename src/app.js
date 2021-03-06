var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var home = require('./routes/home');
var user = require('./routes/user');
var tealPassport = require('./config/passport');
var userm = require('./models/user');
userm.sync({ force: true }).then(function() {
  userm.create({userName: 'john', password: 'password' });
});

passport.use(new Strategy(tealPassport.Strategy));
passport.serializeUser(tealPassport.Serialize);
passport.deserializeUser(tealPassport.Deserialize);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'your secret key' }));
app.use(passport.initialize());
app.use(passport.session());
// Routing

app.use('/', home);
app.use('/home', home);
app.use('/user', user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {    
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('shared/error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('shared/error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
