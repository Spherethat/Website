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
$postalcode = strtoupper($_POST['postalcode']);
$email = trim($_POST['email']);
$phone = trim($_POST['phone']);
$phonedesc = trim($_POST['phonedesc']);
$terms = ($_POST['terms']);
$newsletter = ($_POST['newsletter']);
$payment_option = ($_POST['payment-option']);
$paypal_email = ($_POST['paypal-email']);
$interac_email = ($_POST['interac-email']);
$promo = ($_POST['promo']);
//Digital to be replaced with sendkit
$digital = ($_POST['digital']);
$sendkit = ($_POST['sendkit']);
$newQuote = ($_POST['newQuote']);
$updatedQuote = ($_POST['updatedQuote']);
$phonevalue = ($_POST['phonevalue']);
$thephonevalue = ($_POST['thephonevalue']);
$finalq = ($_POST['newfinalq']);
$comments = ($_POST['comments']);
$actlock = ($_POST['actlock']);

$error = '';

$paymenterror = '';

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

if(!$actlock)
{
$error .= 'Please remove the Activation Lock on your device before sending it in.<br />';
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
$shipping_response = "We'll be sending you your prepaid shipping label with further instructions to send in your phone. It should show up in your e-mail within the next few hours. Once you receive that, you're ready to send in your phone to Sphere!";
$sendkit_response = "NO";
}

if($sendkit)
{
$shipping_response = "We'll be sending out a complimentary shipping kit right to your doorstep with everything you'll need to send in your phone. It should show up in your mail in about a week. Once you receive that, you're ready to send in your phone to Sphere!";
$sendkit_response = "YES";
}

if($payment_option == "Cheque")
{
	$payment_email = "Not Applicable";
}

if($payment_option == "PayPal")
{
	$payment_email = $paypal_email;
}

if($payment_option == "Interac")
{
	$payment_email = $interac_email;
}

// Check message (length)

//if(!$message || strlen($message) < 10)
//{
//$error .= "Please enter your message. It should have at least 10 characters.<br />";
//}

if(!$payment_option)
{
$paymenterror = "Please select a payment option.";
}

if(($payment_option == "PayPal") && !$paypal_email)
{
$paymenterror = "Please enter a PayPal email.";
}

if(($payment_option == "Interac") && !$interac_email)
{
$paymenterror = "Please enter an Interac e-Transfer email.";
}



if(!$error && !$paymenterror)
{
	$mail = mail(PRODUCT_SUBMISSION, "Sphere Package Request - PHONE",
		"DEVICE: ".$model."   //device \r\n"
		."CARRIER: ".$carrier."   //carrier \r\n"
		."CONDITION: ".$condition."   //condition \r\n\r\n"
		."COMMENTS: ".$comments."   //comments \r\n\r\n"
		."PRICE: ".$finalq."   //pricequoted \r\n\r\n"
		."ADDRESS-------------------------------\r\n"
		."First Name: ".$fname."   //fname \r\n"
		."Last Name: ".$lname."   //lname \r\n"
		."Address: ".$address1." ".$address2."   //address \r\n"
		."City: ".$city. "   //city \r\n"
		."Province: ".$province. "   //province \r\n"
		."Postal Code: ".$postalcode. "   //postalcode \r\n"
		."Email: ".$email. "   //email \r\n"
		."Phone: ".$phone. "   //phone \r\n\r\n"
		."Send Kit? : ".$sendkit_response."   //sendkit \r\n"
		."Newsletter: ".$responsetonewsletter."  //newsletter\r\n\r\n"
		."Payment Method: ".$payment_option."   //paymentoption \r\n"
		."Payment Email: ".$payment_email."   //paymentemail \r\n"
		."Promo Code: ".$promo."   //promocode \r\n\r\n"
		."The Email:---------------------------\r\n\r\n"
		."Hi ".$fname.",\r\n\r\n"
		."We received your request to send in the following phone:\r\n\r\n"
		.$phonedesc." - ".$carrier."\r\n"
		.$condition." condition \r\n"
		."Your offer: ".$finalq."\r\n\r\n"
		."What's next?\r\n\r\n"
		."".$shipping_response."\r\n\r\n"
		."If you have any questions, please reply to this message or check out our FAQ.\r\n\r\n"
		."Thank you!\r\n"
		."Sphere\r\n");
	}



if($mail)
{
echo 'OK';
}

else
{
echo 	'<div class="notification_error">'.$error.'</div>'
		.'//DIVIDER//'
		.'<div class="notification_error">'.$paymenterror.'</div>';
}

}
?>
