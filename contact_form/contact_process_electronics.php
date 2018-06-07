<?php

include dirname(dirname(__FILE__)).'/mail.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{

$model = ($_POST['model']);
$condition = ($_POST['condition']);
$fname = stripslashes($_POST['fname']);
$lname = stripslashes($_POST['lname']);
$name = ($_POST['name']);
$address1 = ($_POST['address1']);
$address2 = ($_POST['address2']);
$city = ($_POST['city']);
$province = ($_POST['province']);
$postalcode = ($_POST['postalcode']);
$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$terms = ($_POST['terms']);
$newsletter = ($_POST['newsletter']);
$promo = ($_POST['promo']);
$digital = ($_POST['digital']);

$error = '';

//Check Condition

if(!$condition)
{
$error .= 'Please tell us the condition of your gadget.<br />';
}

// Check name

//if(!$fname || !$lname)
//{
//$error .= 'Please enter your full name.<br />';
//}

// Check Address

if(!$address1 && !$address2)
{
$error .= 'Please enter your address.<br />';
}

if(!$address1 && $address2)
{
$error .= 'Please enter the first line of your address.<br />';
}

// Check City

if(!$city)
{
$error .= 'Please enter your City.<br />';
}

// Check Province

if(!$province)
{
$error .= 'Please enter your Province.<br />';
}

// Check Postal Code

if(!$postalcode || !preg_match("/^([a-zA-Z]\d[a-zA-z]\s?\d[a-zA-Z]\d)$/", $postalcode))
{
$error .= 'Please enter a valid Postal Code.<br />';
}

// Check email

if(!$email)
{
$error .= 'Please enter an e-mail address.<br />';
}

if(!$phone)
{
$error .= 'Please enter a phone number.<br />';
}

if(!$terms)
{
$error .= 'You must agree to the Terms &amp; Conditions of this site.<br />';
}

if(!$newsletter)
{
$responsetonewsletter = 'NO';
}

if($newsletter)
{
$responsetonewsletter = "YES";
}

// Check message (length)

//if(!$message || strlen($message) < 10)
//{
//$error .= "Please enter your message. It should have at least 10 characters.<br />";
//}


if(!$error)
{
echo 'OK';
}

else
{
echo '<div class="notification_error">'.$error.'</div>';
}

}
?>