console.log("js console");

let data; 
let grid = document.querySelector(".grid-container");

if(localStorage.getItem("watchlist")){
  data = JSON.parse(localStorage.getItem("watchlist"));
  if(grid)
    { makeCards(data);}
   
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(xhttp.responseText);
    console.log(data);
    localStorage.setItem("watchlist", JSON.stringify(data));
   


  }
};
xhttp.open("GET", "showdata.json", true);
xhttp.send();

function makeCards(data){
      data.forEach(function(show) {
      let card = document.createElement("div");
    
      card.classList.add("card");

      let textData=
      "<div class='show-title'>"+show.title+"</div>"+
      "<span>"+
      "Publisher:" +show.publisher+"<br>"+
        "Genre:" +show.genre+"<br>"+
        "Seasons:" +show.seasons+"<br>"+
        "Year:" +show.year+"<br>"+
        "Rating:" +show.rating+"<br>"+
      "</span>";

      card.innerHTML = textData;
     
      if(show.imgSrc) {
        card.style.backgroundImage = "url('"+show.imgSrc+"')";
      }
    if(grid) {
        grid.appendChild(card);
    }
       
  });
}