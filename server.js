const express = require("express");

const app = express();

const PORT = 1980;

app.get("/api/message", (req, res) => {
    res.json({
        message:"Welcome back to the 80's"
    });

});

app.listen(PORT, () => {
    console.log(`Welcome back to ${PORT}`);
});