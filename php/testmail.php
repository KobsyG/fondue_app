<?php
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    // Check if the required parameters are provided
    if (isset($_POST['from']) && isset($_POST['subject']) && isset($_POST['message'])) {
        // Retrieve parameters
        $from = $_POST['from'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        // Construct headers
        $headers = "From: " . $from . "\r\n";
        $headers .= "Reply-To: " . $from . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

        // Send email
        if (mail('contact@fonduecoeur.fr', $subject, $message, $headers)) {
            echo "The email has been sent.";
        } else {
            echo "Failed to send the email.";
        }
    } else {
        // Display an error message if parameters are missing
        echo "Error: Missing required parameters.";
    }
?>
