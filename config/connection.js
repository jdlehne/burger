var mysql = require("mysql");


module.exports = function(app){
  var connection = mysql.createConnection(require("../route/setings.js"));

}
