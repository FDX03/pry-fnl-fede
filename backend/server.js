const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

/* ---------- API ---------- */

app.get("/api/projects", (req, res) => {
  db.query("SELECT * FROM projectss", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error BD" });
    }
    res.json(results);
  });
});

/* ---------- SERVER ---------- */

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
