const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("public"));

let products = [
    {
        id: 1,
        name: "T-Shirt",
        price: 499,
        description: "Cotton T-Shirt"
    },
    {
        id: 2,
        name: "Shoes",
        price: 999,
        description: "Sports Shoes"
    },
    {
        id: 3,
        name: "Watch",
        price: 1499,
        description: "Smart Watch"
    }
];

let orders = [];

// GET PRODUCTS
app.get("/products", (req, res) => {

    res.json(products);

});

// ADD PRODUCT
app.post("/products", (req, res) => {

    let product = {
        id: Date.now(),
        name: req.body.name,
        price: Number(req.body.price),
        description: req.body.description
    };

    products.push(product);

    res.json(product);

});

// EDIT PRODUCT
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

    res.json(product);

});

// PLACE ORDER
app.post("/checkout", (req, res) => {

    let cart = req.body.cart;

    if (!Array.isArray(cart) || cart.length === 0) {
        return res.status(400).send("Cart is empty");
    }

    let total = 0;

    let orderItems = [];

    for (let item of cart) {

        let product = products.find(
            p => p.id === Number(item.id)
        );

        let quantity = Number(item.quantity);

        if (!product || !Number.isInteger(quantity) || quantity < 1) {
            return res.status(400).send("Invalid cart item");
        }

        total += product.price * quantity;

        orderItems.push({
            name: product.name,
            price: product.price,
            quantity: quantity
        });

    }

    let order = {
        id: Date.now(),
        items: orderItems,
        total: total,
        status: "Successful"
    };

    orders.push(order);

    res.json(order);

});

// SHOW ORDERS
app.get("/orders", (req, res) => {

    res.json(orders);

});

// START SERVER
app.listen(3000, () => {

    console.log("E-commerce server running on port 3000");

});