const express = require("express");
const mysql = require("mysql");
const app = express();
const config = require("./app/config/db.config");
const connection = mysql.createConnection(config);
connection.connect(function (err) {
  err ? console.log(err) : console.log('connection===',connection);
});
connection.on('error', function(err) {
  console.log('db error', err);
  if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
    handleDisconnect();                         // lost due to either server restart, or a
  } else {                                      // connnection idle timeout (the wait_timeout
    throw err;                                  // server variable configures this)
  }
});

connection.on('connection', (stream)=>{
  console.log("connected");
})


// get 
app.get("/api/news", (req, res) => {
  var sql = "SELECT * FROM `danh_muc_hang`";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({data: results});
  });
});

app.get("/", (req, res) => {
  res.json({"title":"Detach from the world"});
});

app.listen(4000, () => console.log("App listening on port 4000"));
