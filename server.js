const express = require('express');
const app = express();
const port = 3002;

 // define the route

 app.get('/greetings/:username',(req,res)=>{
    const username = req.params.username;
    const greeting = `Hello there, ${username}!`;
    const alternategreeting = `What a delight it is to see you once more, ${username}`;
    res.send(greeting);
 });

 app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
 });