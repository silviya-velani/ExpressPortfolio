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
            res.render('business/contact_list', { title: 'Business Contact List', BusinessList: businessList});
        }
    }).sort({"name":1})
});

/* GET ROUTE FOR DISPLAYING BUSINESS CONTACT ADD PAGE - CREATE OPERATION */
router.get('/add', (req, res, next) => {
    res.render('business/contact_add', { title: 'Add Business Contact'});
});

/* POST ROUTE FOR PROCESSING BUSINESS CONTACT ADD PAGE - CREATE OPERATION */
router.post('/add', (req, res, next) => {
    let newContact = Business({
        "name" : req.body.name,
	    "contact_no" : req.body.contact_no,
	    "email" : req.body.email
    });

    Business.create(newContact, (err, Book) => {
        if(err){
            console.log(err);
            res.end(err);
        } else{
            //refresh the business list
            res.redirect('/contact-list');
        }
    });
});

/* GET ROUTE FOR DISPLAYING BUSINESS CONTACT EDIT PAGE - UPDATE OPERATION */
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Business.findById(id, (err, currentContact) => {
        if(err) {
            //show the error view
            console.log(err);
            res.end(err);
        } else {
            res.render('business/contact_edit', { title: 'Edit Business Contact' , contact: currentContact});
        }
    });
});

/* POST ROUTE FOR PROCESSING BUSINESS CONTACT EDIT PAGE - UPDATE OPERATION */
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedContact = Business({
        "_id" : id,
        "name" : req.body.name,
	    "contact_no" : req.body.contact_no,
	    "email" : req.body.email
    });

    Business.updateOne({_id: id}, updatedContact, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            //refresh the business list
            res.redirect('/contact-list');
        }
    });
});


/* GET METHOD TO PERFORM DELETION - DELETE OPERATION */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Business.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        } else {
            //refresh the business list
            res.redirect('/contact-list');
        }
    });
});


module.exports = router;