// Function to display cart items
function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItemsBody = document.getElementById('cart-items');
    const cartTotalCell = document.getElementById('cart-total');
    cartItemsBody.innerHTML = ''; // Clear previous content
    cartTotalCell.textContent = ''; // Clear previous content

    let totalPrice = 0;

    cart.forEach(item => {
        const row = document.createElement('tr');

        const itemData = document.createElement('p');
        const itemImage = document.createElement('img');
        itemImage.src = item.image; // Display product image
        itemImage.alt = item.name;
        itemData.appendChild(itemImage);
        const itemName = document.createElement('p');
        itemName.textContent = item.name;
        itemData.appendChild(itemName);
        row.appendChild(itemData);

        const unitPrice = document.createElement('td');
        unitPrice.textContent = `$${item.price.toFixed(2)}`;
        row.appendChild(unitPrice);

        const quantity = document.createElement('td');
        const quantityInput = document.createElement('input');
        quantityInput.classList.add('quantity-input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity;
        quantityInput.addEventListener('change', (event) => updateCartItemQuantity(item.name, event.target.value));
        quantity.appendChild(quantityInput);
        row.appendChild(quantity);

        const totalPriceCell = document.createElement('td');
        const total = item.price * item.quantity;
        totalPriceCell.textContent = `$${total.toFixed(2)}`;
        row.appendChild(totalPriceCell);

        const removeButtonCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', () => removeItemFromCart(item.name));
        removeButtonCell.appendChild(removeButton);
        row.appendChild(removeButtonCell);

        cartItemsBody.appendChild(row);

        // Add item total to total price
        totalPrice += total;
    });

    // Display total price
    cartTotalCell.textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to remove item from cart
function removeItemFromCart(itemName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== itemName);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems(); // Update cart display
}

// Function to update item quantity in cart
function updateCartItemQuantity(itemName, newQuantity) {
    if (parseInt(newQuantity) <= 0 || isNaN(parseInt(newQuantity))) {
        alert('Please enter a valid quantity.');
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.map(item => {
        if (item.name === itemName) {
            item.quantity = parseInt(newQuantity);
        }
        return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    displayCartItems(); // Update cart display
}

// Function to clear the entire cart
function clearCart() {
    localStorage.removeItem('cart');
    displayCartItems(); // Update cart display
}

// Function to apply discount
function applyDiscount() {
    const discountCode = document.getElementById('discount-input').value;
    const quizMarks = 50;
    const discountPercentage = (quizMarks > 0) ? 10 : 0;
    const cartTotalCell = document.getElementById('cart-total');
    let totalPrice = parseFloat(cartTotalCell.textContent.substring(1));
    const discountAmount = (totalPrice * discountPercentage) / 100;
    totalPrice -= discountAmount;
    cartTotalCell.textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to show discount section based on quiz marks
function showDiscountSection(quizMarks) {
    const discountSection = document.getElementById('discount-section');
    if (quizMarks > 0) {
        discountSection.style.display = 'block';
    } else {
        discountSection.style.display = 'none';
    }
}

// Function to proceed to payment
function proceedToPayment() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('There are no items in the cart yet.');
    } else {
        // Proceed to the payment page
        window.location.href = 'payment.html';
    }
}

// Initial display of cart items
displayCartItems();

// Call the function to show discount section based on quiz marks
const quizMarks = 50;
showDiscountSection(quizMarks);
