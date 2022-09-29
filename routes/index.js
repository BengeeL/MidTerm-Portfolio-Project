var express = require("express");
var router = express.Router();

const currentYear = new Date().getFullYear();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Home",
    year: currentYear,
  });
});

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", {
    title: "Home",
    year: currentYear,
  });
});

/* GET about me page. */
router.get("/about", function (req, res, next) {
  res.render("index", {
    title: "About Me",
    year: currentYear,
  });
});

/* GET projects page. */
router.get("/projects", function (req, res, next) {
  res.render("index", {
    title: "Projects",
    year: currentYear,
  });
});

/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("index", {
    title: "Services",
    year: currentYear,
  });
});

/* GET contact page. */
router.get("/contact", function (req, res, next) {
  res.render("index", {
    title: "Contact",
    year: currentYear,
  });
});
/* POST contact page. */
router.post("/contact", function (req, res, next) {
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
});

/* GET Resume. */
router.get("/resume", function (req, res, next) {
  res.render("index", {
    title: "Resume",
    year: currentYear,
  });
});

module.exports = router;
