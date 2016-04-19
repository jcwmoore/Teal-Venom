var express = require('express');
var router = express.Router();
var home = require('../controllers/homeController');

/* GET home page. */
router.get('/', function(req, res, next) {    
    var model = new home.Controller().index();
    res.render('home/index', model);
});

module.exports = router;
