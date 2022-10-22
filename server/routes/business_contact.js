let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// Connect to our contact model
let Contact = require("../models/contacts");

let currentYear = new Date().getFullYear();

// GET Route for display contact list page - READ operation
router.get("/", (req, res, next) => {
  Contact.find((err, ContactList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("business_contact/list", {
        title: "Login",
        year: currentYear,
        ContactList: ContactList
      });
    }
  });
});

// GET Route for display add page - CREATE operation
router.get("/add", (req, res, next) => {
 res.render('business_contact/add', {
  title: 'Add Business Contact',
  year: currentYear
 })
});

// POST Route for processing add page - CREATE operation
router.post("/add", (req, res, next) => {
 let newContact = Contact({
  "name": req.body.name,
  "phone": req.body.phone,
  "email": req.body.email
 })

 Contact.create(newContact, (err, Contact) => {
  if(err) {
    console.log(err);
    res.end(err);
  } else {
    // Refresh contact list
    res.redirect("/business_contact");
  }
 });
});

// GET Route for display edit page - UPDATE operation
router.get("/edit/:id", (req, res, next) => {
 let id = req.params.id;

 Contact.findById(id, (err, contactToEdit) => {
  if(err) {
    console.log(err);
    res.end(err);
  } else {
    res.render('business_contact/edit', {
      title: "Edit Business Contact",
      year: currentYear,
      contact: contactToEdit
    })
  }
 });
});

// POST Route for processing edit page - UPDATE operation
router.post("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  let updatedContact = Contact({
    "id": id,
    "name": req.body.name,
    "phone": req.body.phone,
    "email": req.body.email
 })

 Contact.updateOne( {id:  id}, updatedContact, (err) => {
  if(err) {
    console.log(err);
    res.end(err);
  } else {
    // Refresh contact list
    res.redirect("/business_contact");
  }});
});

// GET to perform deletion - DELETE operation
router.get("/delete/:id", (req, res, next) => {
 let id = req.params.id;

 Contact.remove({id:id}, (err) => {
  if(err){
    console.log(err);
    res.end(err);
  } else {
    // Refresh contact list
    res.redirect("/business_contact");
  }
 })
});

module.exports = router;
