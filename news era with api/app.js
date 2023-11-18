const express = require('express');

const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "pages")))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/index.html'))
})
 
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/login/login.html'))
})
app.get('/signup', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/login/signup.html'))
})
app.get('/search', (req, res)=>{
    res.sendFile(path.join(__dirname, '/pages/login/search.html'))
})
 

app.listen(port, () => {
  console.log(`News Era app listening at http://localhost:${port}`)
})