
// app.js
// ExpressPortfolio

// Created by Silviya Velani on 01/10/21.
// Student Id: 301167163
// Copyright © 2021 Centennial College. All rights reserved.


// installed third party packages

let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let favicon = require('serve-favicon')

// database setup
let mongoose = require('mongoose');
let db = require('./db');

//point mongoose to db URI
mongoose.connect(db.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, 'Connection Error: '));
mongodb.once('open', ()=>{
  console.log('Connected to mongoDB...');
});

let indexRouter = require('../routes/index');
let businessRouter = require('../routes/business');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));
app.use(favicon(__dirname + '../../../public/Assets/images/logo.png'));

app.use('/', indexRouter);
app.use('/contact-list', businessRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
