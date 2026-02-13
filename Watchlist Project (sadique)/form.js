const form = document.querySelector('#watchlistForm');
 let existingData = JSON.parse(localStorage.getItem("watchlist"));// || [];

form.addEventListener("submit",function(e){
    e.preventDefault();
    let title = document.querySelector('#title').value;
    let publisher = document.querySelector('#publisher').value;
    let releaseDate = document.querySelector('#releaseDate').value;
    let rating = document.querySelector('#rating').value;
    let status = document.querySelector('#status').value;
    let newObj = {

        title: title,
        publisher: publisher,
        releaseDate: releaseDate,
        rating: rating,
        status: status
    };
   
    existingData.push(newObj);
    localStorage.setItem("watchlist", JSON.stringify(existingData));


    console.log('Form submitted:', {
        title: document.getElementById('title').value,
        publisher: document.getElementById('publisher').value,
        releaseDate: document.getElementById('releaseDate').value,
        rating: document.getElementById('rating').value,
        status: document.getElementById('status').value
    });
    form.reset();
});
