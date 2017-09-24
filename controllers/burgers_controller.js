var express = require("express");
var burgerJS = require("../models/burger.js");

module.exports = function(app) {

  var app = express();

  app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) {
        throw err;
      }
      res.render("index", {
        burger_name: data
      });
    });
  });

  app.post("/", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
      if (err) {
        throw err;
      }

      res.redirect("/");
    });
  });

  app.delete("/:id", function(req, res) {
    connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        throw err;
      }

      res.redirect("/");
    });
  });

  app.put("/", function(req, res) {
    connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [req.body.burger_name, req.body.id], function(err, result) {
      if (err) {
        throw err;
      }

      res.redirect("/");
    });
  });

}
