
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("scores.db");

db.run(`CREATE TABLE IF NOT EXISTS scores(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    score INTEGER
)`);

module.exports = db;