var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/index", function (req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET home page. */
router.get("/aboutme", function (req, res, next) {
  res.render("aboutme", { title: "About Me" });
});

/* GET Products page. */
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Products" });
});

/* GET Services page. */
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

/* GET About page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET Contact page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

module.exports = router;
