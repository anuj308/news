const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// ENDPOINTS
app.get('/', (req, res)=>{
    res.status(200).render("index.html");
})
app.get('/latest', (req, res)=>{
    res.status(200).render('latest.html');
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
