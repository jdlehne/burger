//DROP DATABASE IF EXISTS burgers;

//CREATE DATABASE burgers;

USE burgers;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(45) NULL,
  devoured BOOLEAN,
  date TIMESTAMP,
  PRIMARY KEY (id)
);
