const express = require("express");
const mysql = require("mysql");
const app = express();
const config = require("./app/config/db.config");
const connection = mysql.createConnection(config);

connection.connect(function (err) {
  err ? console.log(err) : console.log(connection);
});

app.get("/api/news", (req, res) => {
  res.json({ message: "I am a message from Server!" });
});

app.listen(4000, () => console.log("App listening on port 4000"));
