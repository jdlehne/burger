var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride("_method"));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.listen(port, function() {
  console.log("I AM ALIVE!!!! @port " + port);
});
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
//-----to be exported-----/ in burgers_controller.js
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

require("./controllers/burgers_controller.js")(app);
require("./config/connection.js")(app);

/*app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) {
      throw err;
    }
    res.render("index", { burger_name: data });
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

//app.listen(port); //-----save for export*/
