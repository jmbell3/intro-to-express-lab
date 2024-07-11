const express = require('express');
const app = express();
const port = 3002;

 app.get('/hello', (req, res) => {
      const name = req.query.name; // fetches the name out of the url
      const age = req.query.age; // fetches the age out of the url
    res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
    });

    app.listen(port,()=>{
        console.log(`server is running at http://localhost:${port}`);
     });