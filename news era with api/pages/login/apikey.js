let newsapi = "d1110cc1ed704632a81a7ff75b791621";
container = document.querySelector(".container");
const generateUIs = (articles) => {
  for (let item of articles) {
    let card = document.createElement("div");
    card.classList.add("articles-box");
    card.innerHTML = `
      <a href="${item.url}" target="_blank" class="view-button">
      <div class="news-pic">
      <img src="${item.urlToImage}" alt="" />
      </div>
      <div class="article">
        <div class="news-title">
          ${item.title}
        </div>  
        <div class="news-description">
        ${item.description || item.content || ""}
        </div>
        </a> 
      </div>`;
    container.appendChild(card);
  }
};

function myFunction() {
  const term = document.getElementById("search-Terms").value;
  let Container = document.getElementsByClassName("container")
  console.log(term)
  let a = async () => {
    let p = await fetch(`https://newsapi.org/v2/everything?q=${term}&apiKey=d1110cc1ed704632a81a7ff75b791621`)
    let data = await p.json();
    // p.then((v)=>{
    //     return v.json()
    // }).then((z)=>{
    //     console.log(z)

    // })
    // containerfirst.innerHTML=" "
    container.innerHTML = " ";
    console.log(data.articles)
    generateUIs(data.articles)
  }
  a()
}

function loadoff() {
  let loading = document.getElementById("loading")
  loading.innerHTML=`<div id="loading-text">Loading</h1>`
  setTimeout(() => {
    loading.style.height = "0px";
    loading.innerHTML=""
  }, 1000);
}


// function for footer
function about(){
    document.getElementById("footer-content").innerHTML=` <h2>News Era</h2>
    <p>News era is dedicated to providing you quick and efficient news from all over the world . <br> We provide
        best news on our news platform.lets learn and grow together</p><div id="footer-logo">
        <ul>
            <li><img id="gmail" src="./photo/bl.png"></li>
            <li><img src="./photo/linkdin.png"></li>
            <li><img src="./photo/twitter.png"></li>
            <li><img src="./photo/instagram.jpeg"></li>
        </ul>
    </div>`
}

function Teams() {
  document.getElementById("footer-content").innerHTML = `<ul>
  <li><span>Ankit Kumar</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<div id="footer-logo-teams">
                <ul>
                    <li><img id="gmail" src="./photo/bl.png"></li>
                    <li><img src="./photo/linkdin.png"></li>
                    <li><img src="./photo/twitter.png"></li>
                    <li><img src="./photo/instagram.jpeg"></li>
                </ul>
            </div></li>
  <li><span>Rajababu Kumar</span>&nbsp&nbsp&nbsp&nbsp&nbsp<div id="footer-logo-teams">
            <ul>
                <li><img id="gmail" src="./photo/bl.png"></li>
                <li><img src="./photo/linkdin.png"></li>
                <li><img src="./photo/twitter.png"></li>
                <li><img src="./photo/instagram.jpeg"></li>
            </ul>
      </div>
  </li>
  <li><span>Anuj Kumar Sharma</span><div id="footer-logo-teams">
      <ul>
          <li><img id="gmail" src="./photo/bl.png"></li>
          <li><img src="./photo/linkdin.png"></li>
          <li><img src="./photo/twitter.png"></li>
          <li><img src="./photo/instagram.jpeg"></li>
      </ul>
</div></li></ul>`
}


