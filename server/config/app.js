// app.js - Benjamin Lefebvre - 301234587 - Sept 29th

// Manage .env files
require("dotenv").config();

// Installed 3rd party packages
let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

// Database setup
let mongoose = require("mongoose");
let DB = require("./db");

// Point Mongoose to the DB URI
mongoose.connect(DB.URI);

let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error: "));
mongoDB.once("open", () => {
  console.log("Connected to MongoDB...");
});

let indexRouter = require("../routes/index");
let usersRouter = require("../routes/users");
let contactRouter = require("../routes/business_contact");

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../node_modules")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/business_contact", contactRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", {
    title: "Error",
    year: new Date().getFullYear(),
  });
});

module.exports = app;
