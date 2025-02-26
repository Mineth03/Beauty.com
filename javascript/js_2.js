// JavaScript for form validation and submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form1");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const commentInput = document.getElementById("comment");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (validateForm()) {
            console.log("Form is valid. Submitting...");
            form.reset();
        } else {
            console.log("Form is not valid. Please check your inputs.");
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate name
        if (nameInput.value === "") {
            isValid = false;
            setErrorFor(nameInput, "Name cannot be blank");
        } else {
            setSuccessFor(nameInput);
        }

        // Validate email
        if (!isValidEmail(emailInput.value)) {
            isValid = false;
            setErrorFor(emailInput, "Invalid email address");
        } else {
            setSuccessFor(emailInput);
        }

        // Validate comment
        if (commentInput.value === "") {
            isValid = false;
            setErrorFor(commentInput, "Comment cannot be blank");
        } else {
            setSuccessFor(commentInput);
        }

        return isValid;
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const errorMsg = formControl.querySelector("small");

        errorMsg.innerText = message;

        formControl.className = "form-control error";
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }

    function isValidEmail(email) {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
    }
});
