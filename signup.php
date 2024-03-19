<?php
// Add your database connection code here if needed
// For demonstration purposes, this example does not include database interaction

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if username and password are set and not empty
    if (isset($_POST['username']) && isset($_POST['password']) && !empty($_POST['username']) && !empty($_POST['password'])) {
        // You can perform further validation here

        // For demonstration purposes, we'll simply display the username and password
        $username = $_POST['username'];
        $password = $_POST['password'];

        echo "Sign up successful!<br>";
        echo "Username: $username<br>";
        echo "Password: $password";
    } else {
        // Username or password not provided, display error message
        echo "Error: Username or password not provided.";
    }
}
?>
