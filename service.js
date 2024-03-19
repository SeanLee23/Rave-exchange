// Dummy data for products (you can replace this with real data from a database)
const products = [
    { id: 1, name: 'Slander Jersey',  price: 300, imageUrl:'Images/slander 300.jpg' },
    { id: 2, name: 'Excision Jersey',  price: 200, imageUrl: 'Images/x 200.jpg'},
    { id: 3, name: 'Slander Vinyl Album',  price: 85, imageUrl: 'Images/slander 85.jpg'},
    // Add more products as needed
];

// Define a shopping cart object
let cart = [];

// Function to display products
function displayProducts() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';
    
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productElement);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    // Find the product with the given ID
    const productToAdd = products.find(product => product.id === productId);
    
    // Add the product to the cart
    cart.push(productToAdd);
    
    // Update the UI to reflect the change (optional)
    updateCartUI();
}

// Function to update the UI with the current cart contents (optional)
function updateCartUI() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = ''; // Clear previous content
    
    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="cart-item-image">
            <p>${product.name} - $${product.price}</p>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Display products when the page loads
window.onload = displayProducts;