const form = document.getElementById('checkout-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate form fields
    const name = form.elements['name'].value.trim();
    const cardNumber = form.elements['card_number'].value.trim();
    const cardType = form.elements['card_type'].value.trim();
    const expDate = form.elements['exp_date'].value.trim();
    const cvv = form.elements['cvv'].value.trim();
    const email = form.elements['email'].value.trim();

    // If any field is empty, prevent form submission and show an alert
    if (!name || !cardNumber || !cardType || !expDate || !cvv || !email) {
        alert('Please fill out all required fields.');
        return;
    }

    // Further validation logic
    if (!validateName(name)) {
        alert('Name cannot include numbers.');
        return;
    }

    if (!validateCardNumber(cardNumber)) {
        alert('Card number can only include numbers.');
        return;
    }

    if (!validateExpiry(expDate)) {
        alert('Invalid expiry date. Please use the format dd/mm/yyyy.');
        return;
    }

    if (!validateCVV(cvv)) {
        alert('CVV must contain exactly 3 numbers.');
        return; // Exit the function if CVV is invalid
    }

    if (!validateEmail(email)) {
        alert('Invalid email address.');
        return;
    }
    if (validateName(name) && validateCardNumber(cardNumber) && validateExpiry(expDate) && validateEmail(email)) {
        // Display success message only if all validations pass
        successMessage.style.display = 'block';
    }
});

function validateName(name) {
    return /^[A-Za-z\s]+$/.test(name);
}

function validateCardNumber(cardNumber) {
    return /^\d+$/.test(cardNumber);
}

function validateExpiry(expDate) {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/; // Matches format dd/mm/yyyy
    return regex.test(expDate);
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Matches typical email format
    return regex.test(email);
}

function validateCVV(cvv) {
    return /^\d{3}$/.test(cvv);
}

function checkout() {
    // Get all input fields
    const nameInput = document.querySelector('input[name="name"]');
    const cardNumberInput = document.querySelector('input[name="card_number"]');
    const cardTypeInput = document.querySelector('select[name="card_type"]');
    const expDateInput = document.querySelector('input[name="exp_date"]');
    const cvvInput = document.querySelector('input[name="cvv"]');
    const emailInput = document.querySelector('input[name="email"]');
    const addressInput = document.querySelector('input[name="address"]');

    // Check if any field is empty, if so, show an alert and exit the function
    if (
        nameInput.value.trim() === '' ||
        cardNumberInput.value.trim() === '' ||
        cardTypeInput.value.trim() === '' ||
        expDateInput.value.trim() === '' ||
        cvvInput.value.trim() === '' ||
        emailInput.value.trim() === '' ||
        addressInput.value.trim() === ''
    ) {
        alert('Please fill out all required fields.');
        return; // Exit the function if any field is empty
    }

    // Perform further actions if all fields are filled
    const name = nameInput.value.trim(); // Get the cardholder's name from the input field
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let message = `\nDear ${name}, you have ordered:  `;

    cart.forEach(item => {
        message += `\n${item.quantity} ${item.name} at a cost of $${(item.price * item.quantity).toFixed(2)},`;
    });

    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    message += `\nand your total bill is $${totalPrice.toFixed(2)}.`;

    const popUpMessage = document.getElementById('pop-up-message');
    popUpMessage.textContent = message;

    if (validateName(name) && validateCardNumber(cardNumber) && validateExpiry(expDate) && validateEmail(email)) {
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
    }

    localStorage.removeItem('cart');
}