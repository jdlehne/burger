var express = require("express");

var routerApp = express.Router();
var burger = require("../models/burger.js");

//var connection = require("../config/connection.js");

/*  routerApp.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) {
        throw err;
      }
      res.render("index", {
        burger_name: data
      });
    });
  });*/

  routerApp.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger_name: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

/*  routerApp.post("/", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
      if (err) {
        throw err;
      }

      res.redirect("/");
    });
  });*/

  routerApp.post("/", function(req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function() {
    res.redirect("/");
  });
});


/*  routerApp.put("/:id", function(req, res) {
    connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        throw err;
      }

      res.redirect("/");
    });
  });*/
  routerApp.put("/:id", function(req, res) {
  var eaten = "id = " + req.params.id;

  console.log("eaten", eaten);

  burger.update({
    devoured: true
  }, eaten, function() {
    res.redirect("/");
  });
});

module.exports = routerApp;
