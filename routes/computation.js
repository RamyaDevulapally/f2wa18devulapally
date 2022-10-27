var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  var num1= Math.abs(Math.random()*10)
  var num2= Math.abs(Math.random()*10)
  var num3= Math.abs(Math.random()*10)

  var log2 = Math.log2(num1)
  var cosh = Math.cosh(num2)
  var floor = Math.floor(num3)

  res.render('computation', { title: 'Ramya Devulapally computation routes',
  num1:num1,
  num2:num2,
  num3:num3,
  log2:log2,
  cosh:cosh,
  floor:floor

});

});

module.exports = router;