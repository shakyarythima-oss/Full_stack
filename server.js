const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static("public"));

let products = [
    {
        id: 1,
        name: "Laptop",
        price: 45000,
        rating: 4.5
    },
    {
        id: 2,
        name: "Mobile",
        price: 15000,
        rating: 4.2
    }
];

// GET API
app.get("/products", (req, res) => {
    res.json(products);
});

// POST API
app.post("/products", (req, res) => {

    let product = {
        id: Date.now(),
        name: req.body.name,
        price: Number(req.body.price),
        rating: Number(req.body.rating)
    };

    products.push(product);

    res.json(product);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});