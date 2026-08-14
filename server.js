import sqlite3 from "sqlite3";
import express from "express";
import path from "path";
import cors from "cors";

const db = new sqlite3.Database('./scores.db');

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join("./public/html/index.html"));
// });

const PORT = 1980;

app.get("/scores", (req, res) => {
  db.all(
    "SELECT * FROM scores ORDER BY score DESC LIMIT 5",
    [],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    }
  );
});

app.post("/scores", (req, res) => {
  const { name, score } = req.body;
  db.run(
    "INSERT INTO scores (name, score) VALUES (?, ?)",
    [name, score],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "Score saved!" });
    }
  );
});

app.post("/clear-scores", (req, res) => {
  db.run(
    "DELETE FROM SCORES WHERE name != 'Mimic';",
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "Cleared user scores" });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Welcome back to ${PORT}`);
});
