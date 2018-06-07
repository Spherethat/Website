<?php

include dirname(dirname(__FILE__)).'/mailwholesale.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{

$fname = stripslashes($_POST['fname']);
$lname = stripslashes($_POST['lname']);
$email = trim($_POST['email']);
$message = ($_POST['message']);

$error = '';

// Check name

if(!$fname || !$lname)
{
$error .= 'Please enter your full name.<br />';
}

// Check email

if(!$email)
{
$error .= 'Please enter an e-mail address.<br />';
}

// Check message (length)

if(!$message || strlen($message) < 10)
{
$error .= "Please enter your message. It should have at least 10 characters.<br />";
}


if(!$error)
{
$mail = mail(HELP_FORM, "Sphere Contact Form",
    "Name: ".$fname." ".$lname."\r\n"
	."Email: ".$email."\r\n"
	."Message: \r\n"
	.$message);

if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}

}
?>