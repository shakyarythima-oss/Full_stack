const express = require("express");

const app = express();

app.use(express.json());

let products = [
    {
        id: 1,
        name: "Laptop",
        price: 45000,
        description: "HP Laptop"
    },
    {
        id: 2,
        name: "Mobile",
        price: 15000,
        description: "Samsung Mobile"
    }
];

// GET all products
app.get("/products", (req, res) => {
    res.json(products);
});

// GET single product
app.get("/products/:id", (req, res) => {

    let product = products.find(
        p => p.id === Number(req.params.id)
    );

    if (!product) {
        return res.status(404).send("Product not found");
    }

    res.json(product);
});

// POST new product
app.post("/products", (req, res) => {

    let product = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    };

    products.push(product);

    res.send("Product Added Successfully");
});

// PUT update product
app.put("/products/:id", (req, res) => {

    let product = products.find(
        p => p.id === Number(req.params.id)
    );

    if (!product) {
        return res.status(404).send("Product not found");
    }

    product.name = req.body.name ?? product.name;
    product.price = req.body.price ?? product.price;
    product.description = req.body.description ?? product.description;

    res.send("Product Updated Successfully");
});

// DELETE product
app.delete("/products/:id", (req, res) => {

    let id = Number(req.params.id);

    products = products.filter(p => p.id !== id);

    res.send("Product Deleted Successfully");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});