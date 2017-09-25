var express = require("express");
var burgerJS = require("../models/burger.js");
var routerApp = express();
var connection = require("../config/connection.js");

  routerApp.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) {
        throw err;
      }
      res.render("index", {
        burger_name: data
      });
    });
  });

  routerApp.post("/", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
      if (err) {
        throw err;
      }

      res.redirect("/");
    });
  });

  routerApp.delete("/:id", function(req, res) {
    connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        throw err;
      }

      res.redirect("/");
    });
  });



  //UPDATE burgers SET devoured = true WHERE id = ?

  routerApp.put("/:id", function(req, res) {
    connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        throw err;
      }

      res.redirect("/");
    });
  });

module.exports = routerApp;
