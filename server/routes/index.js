/* 
index.js
ExpressPortfolio

Created by Silviya Velani on 01/05/21.
Student Id: 301167163
Copyright © 2021 Centennial College. All rights reserved. */


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me'});
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me'});
});

module.exports = router;
