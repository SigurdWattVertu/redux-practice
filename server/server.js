var express = require("express");
var app = express();

var router = express.Router()

app.listen(8080, () => {
    console.log("Server running on port 8080!");
   });

const products = [
    {
        "name": "Guitar",
        "price": 100,
        "id": 1
        },
        {
        "name": "Drums",
            "price": 500,
            "id": 2
        }, 
        {
        "name": "Piano",
        "price": 2000,
        "id": 3
    }
]


app.get("/products", (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json(products);
    // res.send({ result: products})
    });