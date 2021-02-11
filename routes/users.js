/* 
users.js
ExpressPortfolio

Created by Silviya Velani on 01/05/21.
Student Id: 301167163
Copyright © 2021 Centennial College. All rights reserved. */


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
