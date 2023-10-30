document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector("#login_button button");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission for this example

        const username = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;

        // Perform simple validation (you can enhance this as needed)
        if (username === "yourUsername" && password === "yourPassword") {
            // Successful login
            alert("Login successful!");
        } else {
            // Failed login
            alert("Invalid username or password. Please try again.");
        }
    });
    
});
