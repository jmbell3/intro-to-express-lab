const express = require('express');
const app = express();
const port = 3002;

     const collectibles = [ 
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
     ]; 
    

    app.get('/collectibles/:index',(req, res)=>{
        const indexParam = req.params.index; //fetches the index in the url
        const index = parseInt(indexParam,10) // checks to see if it is a number

        if(isNaN(index) || index<0 || index >=collectibles.length){ // checks the conditions
            res.send('This item is not yet in stock. Check back soon!');
        }else{
            const item = collectibles[index]; // index of the collectibles array
            res.send(`So, you want the ${item.name}? For ${item.price} it can be your's!`)
        }
    });

    app.listen(port,()=>{
        console.log(`server is running at http://localhost:${port}`)
     });
