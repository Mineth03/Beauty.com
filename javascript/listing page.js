// Function to fetch XML data
function fetchComments() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            displayComments(this);
        }
    };
    xhttp.open("GET", "comments.xml", true);
    xhttp.send();
}

document.getElementById("colorButton").addEventListener("click", function() {
    let colors = ["lightsalmon", "gray", "lavenderblush"];
    let body = document.body;
    let currentColor = body.style.backgroundColor;
    let index = colors.indexOf(currentColor);
    if (index === -1 || index === colors.length - 1) {
        index = 0;
    } else {
        index++;
    }
    body.style.backgroundColor = colors[index];
});

document.getElementById("TextcolorButton").addEventListener("click", function() {
    var sectionContent = document.querySelector(".wrapper .content");
    
    var colors = ["blue", "black", "red"];

    var currentColor = sectionContent.style.color;

    var index = colors.indexOf(currentColor);

    if (index === -1 || index === colors.length - 1) {
        index = 0;
    } else {
        index++;
    }

    sectionContent.style.color = colors[index];
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('subscriptionForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var name = document.querySelector('input[name="name"]').value;
        var email = document.querySelector('input[name="email"]').value;

        if (name.trim() === '') {
            alert('Please enter your name.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        showPopupMessage(name);

        // Reset the form
        this.reset();
    });

    function showPopupMessage(name) {
        var message = "Dear " + name + ", you have successfully subscribed for a personalized newsletter.";
        alert(message);
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

function displayComments(xml) {
    var xmlDoc = xml.responseXML;
    var comments = xmlDoc.getElementsByTagName("comment");
    var output = "";

    for (var i = 0; i < comments.length; i++) {
        var name = comments[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        var username = comments[i].getElementsByTagName("username")[0].childNodes[0].nodeValue;
        var text = comments[i].getElementsByTagName("text")[0].childNodes[0].nodeValue;

        output += "<div class='testimonial-box'>";
        output += "<div class='box-top'>";
        output += "<div class='profile'>";
        output += "<div class='profile-img'>";
        output += "<img src='images/c-1.jpg' />";
        output += "</div>";
        output += "<div class='name-user'>";
        output += "<strong>" + name + "</strong>";
        output += "<span>" + username + "</span>";
        output += "</div>";
        output += "</div>";
        output += "<div class='reviews'>";
        output += "<i class='fas fa-star'></i>";
        output += "<i class='fas fa-star'></i>";
        output += "<i class='fas fa-star'></i>";
        output += "<i class='fas fa-star'></i>";
        output += "<i class='far fa-star'></i>";
        output += "</div>";
        output += "</div>";
        output += "<div class='client-comment'>";
        output += "<p>" + text + "</p>";
        output += "</div>";
        output += "</div>";
    }

    document.getElementById("comments-container").innerHTML = output;
}

window.onload = function() {
    fetchComments();
};
