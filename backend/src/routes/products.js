const express = require("express");
const Products = require("../models/products");
var cors = require('cors')
const route = express.Router();

route.use(cors())

route.get("/products", async(req, res) => {
    let products = await Products.allProducts();
    res.json({
        products,
    });
});

route.get("/products/:id", async(req, res) => {
    let id = req.params.id;
    res.json({ product: await Products.getOne(id) })
});

module.exports = route;