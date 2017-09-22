var express = require("express");
var bodyParser = require("body-parser");
var mathodOveride = require("method-override");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

 app.use(methodOverride('_method'));

 app.listen(port);
 console.log("I AM ALIVE!!!! @port " + port);
