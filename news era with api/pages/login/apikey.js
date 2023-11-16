let newsapi = "d1110cc1ed704632a81a7ff75b791621";
container = document.querySelector(".container");
// containerfirst = document.querySelector(".container");
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
    console.log(term)
    let a = async ()=>{
        let p = await fetch(`https://newsapi.org/v2/everything?q=${term}&apiKey=d1110cc1ed704632a81a7ff75b791621`)
        let data = await p.json();
        // p.then((v)=>{
        //     return v.json()
        // }).then((z)=>{
        //     console.log(z)

        // })
        // containerfirst.innerHTML=" "
        console.log(data.articles)
        generateUIs(data.articles)
    }
    a()
}
// window.onload = () => {
//     myFunction()
// };



