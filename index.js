const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname,"public/index.html"));
});

app.post("/send-email", function(req,res) {
    const {person, email, message} = req.body;
    res.json(req.body);
});

app.listen(3000);
console.log("listening on http://localhost:3000");