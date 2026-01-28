const form = document.querySelector('#watchlistForm');

form.addEventListener("submit",function(e){


    e.preventDefault();
    console.log('Form submitted:', {
        title: document.getElementById('title').value,
        rating: document.getElementById('rating').value,
        status: document.getElementById('status').value
    });
})
