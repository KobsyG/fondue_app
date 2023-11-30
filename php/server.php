 
<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');

    $from = 'vermeerschjb@orange.fr';
    $subject = 'test2';
    $message = 'bang bang';

    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $mailSent = mail('vermeerschjb@orange.fr', $subject, $message, $headers);

    if ($mailSent) {
        echo "2000";
    } else {
        echo "5000";
    }
?>
