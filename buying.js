// Dummy data for product listings (you can replace this with real data from a database)
const products = [
    { id: 1, 
        name: 'LF EDC 2024 Tickets plus Shuttle pass willing to pay between $550 - 720, can pick up from anywhere', 
        imageUrl : 'Images/rave.jpg',
        category: 'Rave tickets',
        description: 'Searching for tickets to party with friends',
    price : 660 },
    { id: 2, 
        name: 'LF 2(2) day Beyond tickets willing for LA/OC Area ', 
        price: 440, 
        imageUrl : 'Images/buy 2.jpeg', 
        category: 'Rave tickets',
        description: 'Each beat is a moment of pure ecstasy, drawing you deeper into the collective euphoria of the crowd.', },
    { id: 3, 
        name: 'LF (1) friday Beyond ticket! Can pick up in Bay Area and SoCal 🙏🙏🙏', 
        price: 130, 
        imageUrl : 'Images/buy 1.jpeg',
        category: 'Rave tickets',
        description: 'Peace represents the absence of conflict and violence. Love embodies compassion, empathy, and acceptance. Unity emphasizes the idea that everyone in the rave community is part of a larger whole. Respect involves treating others with dignity, consideration, and appreciation.',},
    // Add more products as needed
];

// Function to display product listings
function displayProductListings() {
    const productContainer = document.getElementById('product-listings');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
            <p>Description: ${product.description}</p>
            <button onclick="addToCart(${product.id})">Talk to Person</button>
        `;
        productContainer.appendChild(productCard);
    });
}


// Function to add product to cart (example function, replace with your logic)
function addToCart(productId) {
    console.log(`Product with ID ${productId} added to cart.`);
}

// Display product listings when the page loads
window.onload = displayProductListings;
