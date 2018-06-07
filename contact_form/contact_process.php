<?php

include dirname(dirname(__FILE__)).'/mail.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{

$model = ($_POST['model']);
$carrier = ($_POST['carrier']);
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
$comments = ($_POST['comments']);
$actlock = ($_POST['actlock']);

$error = '';

//Check Carrier

if(!$carrier)
{
$error .= 'Please select a carrier for your phone.<br />';
}

//Check Condition

if(!$condition)
{
$error .= 'Please tell us the condition of your phone.<br />';
}

// Check name

//if(!$name)
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

if(!$actlock)
{
$error .= 'Please remove the Activation Lock on your device before sending it in.<br />';
}

if(!$newsletter)
{
$responsetonewsletter = 'NO';
}

if($newsletter)
{
$responsetonewsletter = "YES";
}

if(!$digital)
{
$responsetodigital = 'NO';
}

if($digital)
{
$responsetodigital = "YES";
}

if(!$sendkit)
{
$sendkit_response = "NO";
}

if($sendkit)
{
$sendkit_response = "YES";
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
