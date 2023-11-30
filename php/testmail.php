<?php
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    header('Access-Control-Allow-Origin: http://localhost:3000');

    if (isset($_POST['from']) && isset($_POST['subject']) && isset($_POST['message'])) {
        $from = $_POST['from'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $headers = "From: " . $from . "\r\n";
        $headers .= "Reply-To: " . $from . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

        if (mail('contact@fonduecoeur.fr', $subject, $message, $headers)) {
            echo "The email has been sent. 200";
        } else {
            echo "Failed to send the email. 500";
        }
    } else {
        echo "Error: Missing required parameters.";
    }
?>
