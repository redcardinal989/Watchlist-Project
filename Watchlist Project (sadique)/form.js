const form = document.createElement('form');
form.id = 'watchlistForm';
document.body.appendChild(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted:', {
        title: document.getElementById('title').value,
        rating: document.getElementById('rating').value,
        status: document.getElementById('status').value
    });
});
