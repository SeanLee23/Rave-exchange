// Dummy data for posts (you can replace this with real data from a database)
const posts = [
    { username: 'user1', imageUrl: 'Images/edc.jpg', caption: 'Selling 4(3) day LV EDC 📍 OC/LA area $500 each or obo 🥶😵‍💫' },
    { username: 'user2', imageUrl: 'Images/selling 1.jpg', caption: 'Selling 2(2) day Nocturnal Sep 16 & Sep 17 OC/LA area $200 each or obo 👻' },
    { username: 'user3', imageUrl: 'Images/Beyond.jpg', caption: 'Selling one (2) day Beyond Wonderland Bay Area only $195 ' },
    // Add more posts as needed
];

// Function to display posts in the feed
function displayPosts() {
    const postFeed = document.getElementById('post-feed');
    postFeed.innerHTML = '';
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <img src="${post.imageUrl}" alt="Post">
            <div class="post-info">
                <p class="username">${post.username}</p>
                <p class="caption">${post.caption}</p>
            </div>
        `;
        postFeed.appendChild(postElement);
    });
}

// Display posts when the page loads
window.onload = displayPosts;
