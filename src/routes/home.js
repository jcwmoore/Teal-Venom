var express = require('express');
var router = express.Router();
var mvc = require('./mvcRouter');
var home = require('../controllers/homeController');

/* GET home page. */
router.get('/', function(req, res, next) {    
    var route = new mvc.Router(req, res, next, 'home/index', new home.Controller());
    route.beginAction('index');
});


module.exports = router;
