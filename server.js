var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");


var app = express();
var PORT= process.env.PORT || 5000;

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(process.env.PORT|| 5000, function() {
  console.log("I AM ALIVE!!!! @PORT" + PORT);
});
