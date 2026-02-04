const form = document.querySelector('#watchlistForm');

form.addEventListener("submit",function(e){
    e.preventDefault();
    let title = titleInput.value;
    let publisher = publisherInput.value;
    let releaseDate = releaseDateInput.value;
    let rating = ratingInput.value;
    let status = statusInput.value;
    let newObj = {
        "id" :getNextId(),
        "title": title,
        "publisher": publisher,
        "releaseDate": releaseDate,
        "rating": rating,
        "status": status
    };
    sumbitDat(newObj);
    let existingData = JSON.parse(localStorage.getItem("watchlist"));// || [];
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
