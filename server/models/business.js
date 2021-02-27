/* 
business.js
ExpressPortfolio

Created by Silviya Velani on 02/24/21.
Student Id: 301167163
Copyright © 2021 Centennial College. All rights reserved. */


let mongoose = require('mongoose');

//create a model class
let businessModel = mongoose.Schema({
    name : String,
	contact_no : Number,
	email : String
}, {
    collection: "contact_list"
});

module.exports = mongoose.model('business', businessModel);