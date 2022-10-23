// business_contact.js - Benjamin Lefebvre (301234587) - Oct 22nd
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// Connect to our contact model
let Contact = require("../models/contacts");

let businessContactController = require("../controllers/business_contact");

// GET Route for display contact list page - READ operation
router.get("/", businessContactController.displayContactList);

// GET Route for display add page - CREATE operation
router.get("/add", businessContactController.displayAddPage);

// POST Route for processing add page - CREATE operation
router.post("/add", businessContactController.processAddRequest);

// GET Route for display edit page - UPDATE operation
router.get("/edit/:id", businessContactController.displayEditPage);

// POST Route for processing edit page - UPDATE operation
router.post("/edit/:id", businessContactController.processEditRequest);

// GET to perform deletion - DELETE operation
router.get("/delete/:id", businessContactController.processDeleteRequest);

module.exports = router;
