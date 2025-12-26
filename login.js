const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post('/login',(req,res)=>{
    const {username, password} = req.body;
    if(username === "admin" && password === "1234")
    {
        res.sendFile(path.join(__dirname, "public", "welcome.html"));
    }
    else{
        res.sendFile(path.join(__dirname, "public", "index.html"));    }
});

app.listen(3000, ()=>{
    console.log("SERVER IS RUNNING.....");
});
