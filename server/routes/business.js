let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to your Business model
let Business = require('../models/business');

/* GET ROUTE FOR BUSINESS LIST PAGE - READ OPERATION */
router.get('/', (req, res, next) => {
    Business.find((err, businessList) => {
        if(err) {
            return console.error(err);
        } else {
            res.render('business', { title: 'Business Contact List', BusinessList: businessList});
        }
    }).sort({"name":1})
});

module.exports = router;