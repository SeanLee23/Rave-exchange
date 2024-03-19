<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if username and password are set and not empty
    if (isset($_POST['username']) && isset($_POST['password']) && !empty($_POST['username']) && !empty($_POST['password'])) {
        // Perform authentication (you can replace this with your own logic)
        $username = $_POST['username'];
        $password = $_POST['password'];

        // For demonstration purposes, let's assume username and password are 'admin'
        if ($username === 'admin' && $password === 'admin') {
            // Authentication successful, redirect to dashboard or home page
            $_SESSION['username'] = $username;
            header("Location: dashboard.php");
            exit;
        } else {
            // Authentication failed, redirect back to login page with error message
            header("Location: login.html?error=1");
            exit;
        }
    } else {
        // Username or password not provided, redirect back to login page with error message
        header("Location: login.html?error=2");
        exit;
    }
}
?>
