// Function to display wishlist items
function displayWishlistItems() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    const wishlistItemsContainer = document.getElementById('wishlist-items');
    wishlistItemsContainer.innerHTML = ''; // Clear previous content

    wishlist.forEach(item => {
        const productElement = document.createElement('div');
        productElement.classList.add('s_product');

        productElement.innerHTML = `
                <div class="product">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="product-name">${item.name}</div>
                    <h2 class="product-price">$${item.price.toFixed(2)}</h2>
                    <div class="buttons">
                        <button class="add-to-wishlist-btn" onclick="removeFromWishlist('${item.name}')">Remove</button>
                        <button class="add-to-cart-btn" onclick="moveToCart('${item.name}', ${item.price}, '${item.image}')">Move to Cart</button>
                    </div>
                </div>
            `;
        wishlistItemsContainer.appendChild(productElement);
    });
}

// Function to remove item from wishlist
function removeFromWishlist(itemName) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(item => item.name !== itemName);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    displayWishlistItems(); // Update wishlist display
}

// Function to move wishlist item to cart
function moveToCart(itemName, itemPrice, itemImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingCartItem = cart.find(item => item.name === itemName);

    if (!existingCartItem) {
        // If item does not exist in cart, add it
        const cartItem = {
            name: itemName,
            price: itemPrice,
            quantity: 1,
            image: itemImage
        };
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        // Remove item from wishlist
        removeFromWishlist(itemName);

        alert(`${itemName} moved to cart successfully!`);
    } else {
        alert(`${itemName} is already in your cart!`);
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))


// Initial display of wishlist items
displayWishlistItems();