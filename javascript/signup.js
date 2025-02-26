document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('signupForm');
    var UserMessage = document.getElementById('UserMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting initially

        // Validate all inputs
        var inputs = form.querySelectorAll('input, select');
        var isValid = true;

        inputs.forEach(function (input) {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if (isValid) {
            UserMessage.style.display = 'block';
            UserMessage.textContent = 'Thank you for signing up! The recommended results will be shown shortly.';
            UserMessage.style.fontWeight = 'bold';
            UserMessage.style.fontSize = '18px';
            setTimeout(function () {
                UserMessage.style.display = 'none';
                form.submit();
            }, 2000); // Hide the message after 2 seconds and then submit the form
        } else {
            alert('Please fill in all required fields.');
        }
    });
});
   