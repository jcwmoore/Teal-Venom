var app = require('express');
var router = app.Router();
var user = require('../controllers/userController');
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET registration page */
router.get('/register', function(req, res, next) {
    var model = new user.Controller(passport, app.db).register();
    res.render('user/register', model);
});

/* POST registration page */
router.post('/register', function(req, res, next) {
    var model = new user.Controller(passport, app.db).saveRegistration(req.body);
    model.user = req.user;
    res.render('user/register', model);
});

module.exports = router;
