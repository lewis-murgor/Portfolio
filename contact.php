<?php
// Get data from form 
$name = $_POST['Name'];
$email= $_POST['Email'];
$message= $_POST['Message'];
 
$to = "kiplagatlewis29@gmail.com";
$subject = "Have some work for Lewis?";
 
// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message
$txt ="Name = ". $Name . "\r\n  Email = "
    . $Email . "\r\n Message =" . $Message;
 
$headers = "From: noreply@demosite.com" . "\r\n" .
            "CC: somebodyelse@example.com";
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}
 
// Redirect to
header("Location:contact.html");
?>