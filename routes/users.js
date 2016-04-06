var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET test page */
router.get('/test', function(req, res, next) {
  res.render('index', { title: 'test' });
});

module.exports = router;
