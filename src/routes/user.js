var app = require('express');
var router = app.Router();
var user = require('../controllers/userController');
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('user/login');
});
router.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });

module.exports = router;
