// contact.js - Benjamin Lefebvre - 301234587 - Oct 5th

let mongoose = require("mongoose");

// Create a model class
let contactModel = mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
  },
  {
    collection: "contacts",
  }
);

module.exports = mongoose.model("Contact", contactModel);
