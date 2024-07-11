const express = require('express');
const app = express();
const port = 3002;

// define the route 

app.get('/roll/:number',(req,res)=>{
    const numberParam = req.params.number;
    const maxNumber = parseInt(numberParam,10);

    if(isNaN(maxNumber)){
        res.send("You must specify a number.");
    }else{
        const rolledNumber = Math.floor(Math.random()*(maxNumber + 1));
        res.send(`you rolled a ${rolledNumber}`);
    }
});

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
 });