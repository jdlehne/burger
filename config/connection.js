var mysql = require("mysql");

module.exports = function(app) {

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
    console.log("mySql connected at " + connection.threadId);
  });

    //connection.end();

}