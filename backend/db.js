const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Fede0412$",
  database: "bores_arch"
});

db.connect(err => {
  if (err) {
    console.error("Error MySQL:", err);
    return;
  }
  console.log("MySQL conectado a bores_arch");
});

module.exports = db;
