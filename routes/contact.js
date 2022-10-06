let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// Connect to our contact model
let Contact = require("../models/contacts");

// GET Route for contact list - READ operation
router.get("/", (req, res, next) => {
  Contact.find((err, ContactList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("contact", {
        title: "Contact",
        year: new Date().getFullYear(),
        ContactList: ContactList
      });
    }
  });
});

module.exports = router;
