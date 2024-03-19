// Dummy data for reviews (you can replace this with data from a database)
let reviews = [];

// Function to display reviews
function displayReviews() {
    const reviewsDiv = document.getElementById('reviews');
    reviewsDiv.innerHTML = '';

    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <p><strong>${review.username}</strong> - Rating: ${review.rating}</p>
            <p>${review.comment}</p>
        `;
        reviewsDiv.appendChild(reviewElement);
    });
}

// Function to handle form submission
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    // Add the new review to the reviews array
    reviews.push({ username, rating, comment });

    // Display updated reviews
    displayReviews();

    // Reset the form fields
    document.getElementById('reviewForm').reset();
});

document.addEventListener('DOMContentLoaded', function() {
    const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
    const container = document.getElementById('container');

    darkModeCheckbox.addEventListener('change', function() {
        if (darkModeCheckbox.checked) {
            container.classList.add('dark-mode');
        } else {
            container.classList.remove('dark-mode');
        }
    });
});
