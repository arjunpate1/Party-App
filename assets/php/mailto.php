<?php

$name = $_POST['name'];
$to = $_POST['email'];
$subject = "It's Party Time";
$from = 'me@arjunsamir.com';
 
// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
// Create email headers
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
 
// Compose a simple HTML email message
$message = '<html><body>';

$message .= '<h1 style="color:#f40;">Hi '.$name.'</h1>';
$message .= '<p style="color:#080;font-size:18px;">Thanks For Registering</p>';

$message .= '</body></html>';
 
// Sending email
if( mail( $to, $subject, $message, $header ) ) {
    
    echo 'success';
    
} 

else{
    
    echo 'Fail';
    
}

?>