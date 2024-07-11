//Question 4

const express = require('express');
const app = express();
const port = 3002;

const shoes = [ 
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" }, 
    { name: "Air Mahomeses", price: 501, type: "sneaker" }, 
    { name: "Utility Boots", price: 20, type: "boot" }, 
    { name: "Velcro Sandals", price: 15, type: "sandal" }, 
    { name: "Jet Boots", price: 1000, type: "boot" }, 
    { name: "Fifty-Inch Heels", price: 175, type: "heel" } 
];

app.get('/shoes',(req,res)=>{
    let filteredshoes = shoes;

    // min-price

    if(req.query['min-price']){
        const minprice = parseInt(req.query['min-price']);
        filteredshoes = filteredshoes.filter(shoe => shoe.price >= minprice);
    }
// max-price:
    if(req.query['max-price']){
        const maxprice = parseInt(req.query['max-price']);
        filteredshoes = filteredshoes.filter(shoe => shoe.price >= maxprice);
    }

    // type of shoes
    if(req.query.type){
      const type = req.query.type.toLowerCase();
      filteredshoes = filteredshoes.filter(shoe=> shoe.type === type);
    }

    res.json(filteredshoes)

});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
 });