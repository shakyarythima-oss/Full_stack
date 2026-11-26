const express = require("express");

const app = express();

app.use(express.json());

// First GET route
app.get("/", (req, res) => {
    res.send("Welcome to Express Application");
});

// Second GET route
app.get("/about", (req, res) => {
    res.send("This is About Page");
});

// Third GET route
app.get("/contact", (req, res) => {
    res.send("This is Contact Page");
});

// Fourth GET route
app.get("/users", (req, res) => {
    res.send("This is Users Page");
});

// Fifth POST route
app.post("/adduser", (req, res) => {

    let user = req.body;

    res.send("User Added Successfully");

    console.log(user);
});

// Start server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});