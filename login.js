const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyparser.urlencoded({extended : true}));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,"index.html"));
});

app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if(username === "admin" && password === "1234")
    {
        res.sendFile(path.join(__dirname,"welcome.html"));
    }
    else{
        res.sendFile(path.join(__dirname,"index.html"));
    }
});

app.listen(3000, ()=>{
    console.log("SERVER IS RUNNING.....");
});