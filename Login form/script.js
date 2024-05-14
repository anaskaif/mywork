document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation (you can add more complex validation)
    if (username.trim() === "") {
        alert("Please enter your username");
        return;
    }

    if (password.trim() === "") {
        alert("Please enter your password");
        return;
    }

    // Form is valid, perform login (here you can send data to server or do other actions)
    console.log("Username:", username);
    console.log("Password:", password);

    // Reset form fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});
