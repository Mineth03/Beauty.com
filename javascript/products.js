function addToCart(event, itemName, itemPrice, itemImage) {
    event.preventDefault();

    const quantityInput = event.target.closest('.product').querySelector('.quantity');
    const quantity = parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity <= 0) {
        alert('Please enter a valid quantity.');
        return;
    }

    // Check if item already exists in cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingCartItem = cart.find(item => item.name === itemName);

    if (existingCartItem) {
        // If item already exists, update quantity
        existingCartItem.quantity += quantity;
    } else {
        // If item does not exist, add it to cart
        const cartItem = {
            name: itemName,
            price: itemPrice,
            quantity: quantity,
            image: itemImage
        };
        cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    quantityInput.value = '';
    alert(`${itemName} added to cart!`);
}


function addToWishlist(event, itemName, itemPrice, itemImage) {
    event.preventDefault();

    // Check if item already exists in wishlist
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (wishlist.some(item => item.name === itemName)) {
        alert('This item is already in your wishlist!');
        return;
    }

    const wishlistItem = {
        name: itemName,
        price: itemPrice,
        image: itemImage
    };

    wishlist.push(wishlistItem);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    alert(`${itemName} added to wishlist!`);
}

const observerP = new IntersectionObserver((entries) => {
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
hiddenElements.forEach((el) => observerP.observe(el))

