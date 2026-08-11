const db = require("./database");
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

app.use(express.static("public"));
app.use("/html", express.static(path.join(__dirname, "public/html")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/index.html"));
});

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

app.listen(PORT, () => {
  console.log(`Welcome back to ${PORT}`);
});
