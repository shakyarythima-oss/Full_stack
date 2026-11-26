const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/productDB")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Create Schema
const productSchema = new mongoose.Schema({

    name: String,

    price: Number,

    description: String

});

// Create Model
const Product = mongoose.model("Product", productSchema);

// CREATE PRODUCT
app.post("/products", async (req, res) => {

    let product = new Product(req.body);

    await product.save();

    res.send("Product Added Successfully");

});

// READ ALL PRODUCTS
app.get("/products", async (req, res) => {

    let products = await Product.find();

    res.json(products);

});

// READ SINGLE PRODUCT
app.get("/products/:id", async (req, res) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).send("Product not found");
    }

    res.json(product);

});

// UPDATE PRODUCT
app.put("/products/:id", async (req, res) => {

    let product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    if (!product) {
        return res.status(404).send("Product not found");
    }

    res.json(product);

});

// DELETE PRODUCT
app.delete("/products/:id", async (req, res) => {

    let product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
        return res.status(404).send("Product not found");
    }

    res.send("Product Deleted Successfully");

});

// Start Server
app.listen(3000, () => {

    console.log("Server running on port 3000");

});