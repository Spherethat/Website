<?php

include dirname(dirname(__FILE__)).'/mail.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{

$name = stripslashes($_POST['name']);
$org = ($_POST['organization']);
$phone = ($_POST['phone']);
$email = trim($_POST['email']);
$message = ($_POST['message']);

$error = '';

// Check name

if(!$name)
{
$error .= 'Please enter your name.<br />';
}

// Check email

if(!$email)
{
$error .= 'Please enter an e-mail address.<br />';
}

// Check message (length)

if(!$message)
{
$error .= "Please enter your message.<br />";
}


if(!$error)
{
$mail = mail(HELP_FORM, "Sphere Contact Form",
    "Name: ".$name."\r\n"
	."Email: ".$email."\r\n"
  ."Phone: ".$phone. "\r\n"
  ."Organization: ".$org. "\r\n"
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
