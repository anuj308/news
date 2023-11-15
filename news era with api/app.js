const express = require('express');

const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "pages")))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/index.html'))
})
app.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/index.html'))
})
app.get('/latest', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/latest.html'))
})
app.get('/India', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/India.html'))
})
 
app.get('/world', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/world.html'))
})
app.get('/education', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/education.html'))
})
app.get('/business', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/business.html'))
}) 
 
app.get('/technology', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/technology.html'))
})
app.get('/entertainment', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/entertainment.html'))
})
app.get('/sports', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/sports.html'))
})
app.get('/science', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/science.html'))
})
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/login/login.html'))
})
app.get('/signup', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/login/signup.html'))
})
 

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`)
})

 

