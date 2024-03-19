<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set your email address where you want to receive emails
    $to = 'your_email@example.com';

    // Set the email subject
    $subject = 'New Contact Form Submission';

    // Compose the email message
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Set headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(array('status' => 'success', 'message' => 'Your message has been sent successfully. We will get back to you shortly.'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Sorry, something went wrong. Please try again later.'));
    }
}
?>
