// index.js - Benjamin Lefebvre - 301234587 - Oct 22nd

let express = require("express");
let router = express.Router();

const currentYear = new Date().getFullYear();

module.exports.displayHomePage = (req, res, next) => {
  res.render("index", {
    title: "Home",
    year: currentYear,
  });
};

module.exports.displayAboutPage = (req, res, next) => {
  res.render("index", {
    title: "About Me",
    year: currentYear,
  });
};

module.exports.displayProjectsPage = (req, res, next) => {
  res.render("index", {
    title: "Projects",
    year: currentYear,
  });
};

module.exports.displayServicesPage = (req, res, next) => {
  res.render("index", {
    title: "Services",
    year: currentYear,
  });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render("index", {
    title: "Contact",
    year: currentYear,
  });
};

module.exports.processContactPage = (req, res, next) => {
  // Capture Information
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  console.log(req.body);

  // Sending to home page
  res.render("index", {
    title: "Home",
    year: currentYear,
  });
};

module.exports.displayResumePage = (req, res, next) => {
  res.render("index", {
    title: "Resume",
    year: currentYear,
  });
};