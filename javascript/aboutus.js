function changeFontSize(action) {
    let elements = document.querySelectorAll('body *');
    elements.forEach(function(element) {
        // Check if the element is not one of the font adjustment buttons
        if (element.id !== "increaseBtn" && element.id !== "decreaseBtn") {
            let computedStyle = window.getComputedStyle(element);
            let currentSize = parseFloat(computedStyle.fontSize);
            if (action === 'increase') {
                element.style.fontSize = (currentSize + 1) + 'px';
            } else if (action === 'decrease') {
                element.style.fontSize = (currentSize - 1) + 'px';
            }
        }
    });
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