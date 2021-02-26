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