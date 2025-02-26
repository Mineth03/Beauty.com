document.getElementById("queryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let category = document.getElementById("queryTheme").value;
    let details = document.getElementById("queryDetails").value;
    let summary = "Name: " + name + "<br>Email: " + email + "<br>Category: " + category + "<br>Details: " + details;
    let popup = window.open("", "Contact Summary", "width=400,height=300");
    popup.document.write("<div class='popup'>" + summary + "<div class='close-btn'><button onclick='window.close()'>Close</button></div></div>");
});


