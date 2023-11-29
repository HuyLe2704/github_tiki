const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const allItemsCarousel = require('./data/allItemsCarousel')
const homeCollectionDeals = require('./data/homeCollectionDeals')
const homeCollectionBrand = require('./data/homeCollectionBrand')
const homeCollectionBrandReal = require('./data/homeCollectionBrandReal')
const containerSuggest = require('./data/containerSuggest')
const homeCollectionBestSellers = require('./data/homeCollectionBestSellers')
const homeTabsContent = require('./data/homeTabsContent')
const homeTabsContent2 = require('./data/homeTabsContent2')
const registerInput2 = require('./data/registerInput2')
const registerInput3 = require('./data/registerInput3')

app.use(express.json());
app.use(cors())

app.get("/api/v1/allItemsCarousel", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json(allItemsCarousel);
});

app.get("/api/v1/homeCollectionDeals", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json(homeCollectionDeals);
})

app.get("/api/v1/homeCollectionBrand", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json(homeCollectionBrand);
})

app.get("/api/v1/homeCollectionBrandReal", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json(homeCollectionBrandReal);
})

app.get("/api/v1/homeCollectionBestSellers", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json(homeCollectionBestSellers);
})

app.get("/api/v1/containerSuggest", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json(containerSuggest);
})

app.get("/api/v1/homeTabsContent", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json(homeTabsContent);
})

app.get("/api/v1/homeTabsContent2", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json(homeTabsContent2);
})

app.get("/api/v1/registerInput2", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json(registerInput2);
});

app.get("/api/v1/registerInput3", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json(registerInput3);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});