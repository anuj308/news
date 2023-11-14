// const express = require("express");
// const path = require("path");

// const app = express();
// const port = 3000;

// // ENDPOINTS
// app.get('/', (req, res)=>{
//     res.status(200).render("index.html");
// })
// app.get('/latest', (req, res)=>{
//     res.status(200).render('latest.html');
// })

// // START THE SERVER
// app.listen(port, ()=>{
//     console.log(`The application started successfully on port ${port}`);
// });



function contact(){
    document.getElementById("footer-content").innerHTML="<p> Contact:-  newsera@gmail.com </p>"
}
function Developers(){
    document.getElementById("footer-content").innerHTML=`<ul>
    <li><span>Ankit Kumar</span>  &nbsp ankiiiiitx@gmail.com</li>
    <li><span>Rajababu Kumar</span></li>
    <li><span>Anuj Kumar Sharma</span></li></ul>`
}