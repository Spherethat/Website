<?php

echo'
<!DOCTYPE html>
<html>
<head>
	<title>Sell Your Phone | Sphere - Sell Your Phone Online Canada</title>
	<meta name="description" content="Sell your Phone to Sphere and get top dollar for it. Get a quote for yours today. Free shipping and fast payments!" />
	<meta charset="UTF-8">
	<script src="../design/js/jquery.min.js"></script>
	<script src="../design/js/skel.min.js"></script>
	<script src="../design/js/skel-layers.min.js"></script>
	<script src="../design/js/inits.js"></script>

	<link href="../design/css/main.css?v=4" rel="stylesheet" type="text/css" />

	<noscript>
			<link rel="stylesheet" href="../design/css/skel.css" />
			<link rel="stylesheet" href="../design/css/style.css" />
		</noscript>

	<link rel="stylesheet" type="text/css" href="../css/reset.css">
	<link rel="stylesheet" type="text/css" href="../css/jquery-ui.css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700|Ubuntu:400,700" rel="stylesheet">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
	<script type="text/javascript" src="../js/scripts.js?v=7"></script>
	<script type="text/javascript" src="../js/formscripts.js?v=5"></script>

	<script type="text/javascript">
	var phone = "'.$gadget.'";
	var phonedesc = "'.$gadgetdesc.'";
	var brand = "'.$brand.'";
	var upperGD = phonedesc.toUpperCase();
	var year = (new Date()).getFullYear();

	function runnit(){
	document.getElementById("headertext").innerHTML = "<h9>SELL YOUR " + upperGD + "</h9>";
	document.getElementById("copyright").innerHTML = "<p>Copyright &copy; 2013 - " + year +" Sphere</p>";
	document.title = "Sell Your " + phonedesc + " | Sphere - Sell Your Phone Online Canada";
	document.getElementsByTagName("meta")["description"].content = "Sell your " + phonedesc + " to Sphere and get top dollar for it. Get a quote for yours today. Free Shipping and Fast payments!"
	document.getElementById("actlock").innerHTML = actlock[brand];
	};	</script>


</head>

<body>

<body onload="runnit();">

	<header id="header">

		<h1>	<a href="https://www.spherethat.ca/" title="Sphere Electronics" id="logo"></a>
</h1>

		<nav id="nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/why-sphere/">Why Sphere?</a></li>
				<li><a href="/about-us/">About Us</a></li>
				<li><a href="/FAQ/">FAQ</a></li>
				<li><a href="/business">Sell in Bulk</a></li>
				<li><a href="/contact/">Contact</a></li>
			</ul>
		</nav>
	</header>


	<div id="wrapper">

		<div id="container">

			<div id="innerContainer">

				<div id="hook">

					<div id="headertext"></div>

					<p>Answer the questions below to get a quote!</p>

				</div>

				<form id="product-quote">

					<div class="product-evaluation">

						<input type="text" id="model" name="model" value="" style="display: none">
						<input type="text" id="phonedesc" name="phonedesc" value="" style="display:none">

						<h2>1. Carrier</h2>

						<div>
							<select id="carrier" name="carrier">
							<option value="" selected="selected">Select</option>
							<option value="Rogers" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Carrier\',\'event_label\': \'Rogers\'});">Rogers</option>
							<option value="Fido" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Carrier\',\'event_label\': \'Fido\'});">Fido</option>
							<option value="Bell" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Carrier\',\'event_label\': \'Bell\'});">Bell</option>
							<option value="Virgin" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Carrier\',\'event_label\': \'Virgin\'});">Virgin</option>
							<option value="Telus" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Carrier\',\'event_label\': \'Telus\'});">Telus</option>
							<option value="Koodo" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Carrier\',\'event_label\': \'Koodo\'});">Koodo</option>
							<option value="Unlocked" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Carrier\',\'event_label\': \'Unlocked\'});">Unlocked</option>
						</select>
						</div>

						<p style="margin-bottom: 0; clear: both">Please select one of the following carriers.</p>
						<p>If your phone is <b>unlocked</b>, select the "unlocked" option.</p>

						<div class="carrier-img">
							<a class="rogers" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Carrier\',\'event_label\': \'Rogers\'});" style="display:inline-block;"><img src="../img/carriers/rogers-small.png"></a>
							<a class="fido" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Carrier\',\'event_label\': \'Fido\'});" style="display:inline-block;"><img src="../img/carriers/fido-small.png"></a>
							<a class="bell" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Carrier\',\'event_label\': \'Bell\'});" style="display:inline-block;"><img src="../img/carriers/bell-small.png"></a>
						<a class="virgin" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Carrier\',\'event_label\': \'Virgin\'});" style="display:inline-block;"><img src="../img/carriers/virginmobile-small.png"></a>
							<a class="telus" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Carrier\',\'event_label\': \'Telus\'});" style="display:inline-block;"><img src="../img/carriers/telus-small.png"></a>
						<a class="koodo" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Carrier\',\'event_label\': \'Koodo\'});" style="display:inline-block;"><img src="../img/carriers/koodo-small.png"></a>
							<a class="unlocked" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Carrier\',\'event_label\': \'Unlocked\'});" style="display:inline-block;"><img src="../img/carriers/unlocked-phone.png"></a>
						</div>

						<h2>2. Condition</h2>

						<div>
							<select id="condition" name="condition">
							<option value="" selected="selected">Select</option>
							<option value="Mint" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Condition\',\'event_label\': \'Mint\'});">Mint</option>
							<option value="Good" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Condition\',\'event_label\': \'Good\'});">Good</option>
							<option value="Rough" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Condition\',\'event_label\': \'Rough\'});">Rough</option>
							<option value="Broken" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Condition\',\'event_label\': \'Broken\'});">Broken</option>
						</select>
						</div>

						<p style="margin-bottom: 0; clear: both">How would you rate your phone\'s condition?</p>
						<p>For a description of each option, click the headings below.</p>

						<div id="condition-accordion">

							<h3 onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Condition\',\'event_label\': \'Mint\'});" id="mint-condition">Mint</h3>

							<div>

								<p>Your device has no scratches or scuffs anywhere on the body. All of the functions work perfectly. Looks basically brand new.</p>

							</div>

							<h3 onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Condition\',\'event_label\': \'Good\'});" id="good-condition">Good</h3>

							<div>

								<p>Your device has some light scratches on the body. There are no large scratches or scuffs. No cracks or dents anywhere on the body. All of the functions work perfectly.</p>

							</div>

							<h3 onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Condition\',\'event_label\': \'Rough\'});" id="rough-condition">Rough</h3>

							<div>

								<p>Your device has a lot of scratches and/or scuffs on the body. There are dents on the body. All of the functions work perfectly. NOTE: the screen is not cracked.</p>

							</div>

							<h3 onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Condition\',\'event_label\': \'Broken\'});" id="broken-condition">Broken</h3>


							<div>

								<p>Your device is not functioning properly due to issues such as (but not limited to): cracked glass, touch screen issues, missing or malfunctioning buttons, LCD damage (eg. dots, flickering, or discolouration), LCD burn-in, screen bubbles, blurry
									or not focusing camera, does not turn on, or water damage. Your device must still be intact.</p>

							</div>

						</div>

						<div id="actlock"></div>

					</div>

					<div id="quote">

						<p>We"ll pay you:</p>

						<h2 id="updatedQuote">$0</h2>
						<input type="hidden" name="newfinalq" id="newfinalq" value="">


						<p id="phone-description">To get a quote, please tell us the carrier and condition of your phone.</p>

						<a onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Submission\',\'event_label\': \'Get Paid\'});" href="#main-form" id="getpaid-button">GET PAID &raquo;</a>

					</div>

				 	<div id="main-form">

						<h2 style="display: block; clear: both">3. Your Information</h2>

						<p style="margin-bottom: 10px; font-family: helvetica, open sans, arial; clear: both; color: #666">Fill out the information below to get your free shipping label!</p>

						<div id="note"></div>

						<div id="fields">

							<div class="frm-left">

								<p class="form-label"><span class="req">* </span>First Name:</p>
								<input id="fname" type="text" name="fname">

							</div>

							<div class="frm-left-mgrg20">

								<p class="form-label"><span class="req">* </span>Last Name:</p>
								<input id="lname" type="text" name="lname">

							</div>

							<div class="frm-clr-both">

								<p class="form-label"><span class="req">* </span>Street Address - Line 1:</p>
								<input id="address1" type="text" name="address1">

							</div>

							<div class="frm-clr-both">

								<p class="form-label">Street Address - Line 2:</p>
								<input id="address2" type="text" name="address2">

							</div>

							<div class="frm-left">

								<p class="form-label"><span class="req">* </span>City:</p>
								<input id="city" type="text" name="city">

							</div>

							<div class="frm-left-mgrg20">

								<p class="form-label"><span class="req">* </span>Province:</p>
								<select id="province" type="text" name="province">
								<option value="" selected="selected">...</option>
								<option value="AB">AB</option>
								<option value="BC">BC</option>
								<option value="MB">MB</option>
								<option value="NB">NB</option>
								<option value="NL">NL</option>
								<option value="NS">NS</option>
								<option value="NT">NT</option>
								<option value="NU">NU</option>
								<option value="ON">ON</option>
								<option value="PE">PE</option>
								<option value="QC">QC</option>
								<option value="SK">SK</option>
								<option value="YT">YT</option>
							</select>

							</div>

							<div class="frm-left-mgrg20">

								<p class="form-label"><span class="req">* </span>Postal Code:</p>
								<input id="postalcode" type="text" name="postalcode">

							</div>

							<div class="frm-left-mgrg-rg20">

								<p class="form-label"><span class="req">* </span>Email Address:</p>
								<input id="email" type="text" name="email">

							</div>

							<div class="frm-left-mgr-bt10">

								<p class="form-label"><span class="req">* </span>Phone Number:</p>
								<input id="phone" type="text" name="phone">

							</div>

							<div class="frm-1" style="padding:0px 0px 15px 0px;">

								<p class="form-label"></span>Device Comments:</p>
								<textarea name="comments" style="width:500px; height:150px" placeholder="(e.g. Cracked Glass, Screen Flicker etc.)"></textarea>

							</div>

							<br><br>

							<p style="line-height: 120%; margin-bottom: 10px; font-family: helvetica, open sans, arial; clear: both; color: #666">If you require shipping materials, we can send a free shipping kit direct to your doorstep (3-5 business days). Otherwise, we\'ll email you a prepaid shipping label that you can use to mail your phone to us.</p>


							<p class="check-label"><input type="checkbox" name="sendkit" value="1" class="frm-left-mgrg-rg10">I need a complimentary shipping kit sent to my address.</p>
							<br><br>

							<p class="check-label"><input type="checkbox" name="terms" value="1" class="frm-left-mgrg-rg10">I have read and agree to the <a href="http://www.spherethat.ca/terms-and-conditions/" target="_blank">Terms &amp; Conditions</a> of this site.</p>
							<br><br>

							<p class="check-label"><input type="checkbox" name="actlock" value="1" class="frm-left-mgrg-rg10">I have removed the Activation Lock from my device.</p>

							<div style="overflow: auto; clear: both ">
								<div id="information-proceed" onClick="gtag(\'event\', \'Select\', {\'event_category\': \'Submission\',\'event_label\': \'Address Complete\'});">PROCEED</div>
								<input type="reset" id="reset" value="RESET">
							</div>

						</div>

					</div>

					<div id="payment-form">

						<h2 style="display: block; clear: both">4. Payment Option</h2>

						<p style="margin-bottom: 10px; clear: both;">Select a payment option to recieve your money.</p>

						<div id="payment-note"></div>

						<div id="cheque">

							<input type="radio" name="payment-option" value="Cheque">

							<h3>Cheque</h3>

							<img src="/img/cheque.png">

							<p hidden="" class="chequep">A cheque addressed to your full name as entered above will be mailed to you.</p>

						</div>

						<div id="paypal">

							<input type="radio" name="payment-option" value="PayPal">

							<h3>PayPal</h3>

							<img src="/img/PayPal.png">

							<p hidden="" class="paypalp">Enter your PayPal email address:</p>

							<input style="display: none;" class="paypalp" id="paypal-email" type="text" name="paypal-email">

							<p hidden="" class="paypalp" style="margin-left: 0px"> <input id="paypal-email-same-as-email" type="checkbox" name="paypal-email-same-as-email" value="SAME">Same as email entered above</p>

						</div>

						<div id="interac">

							<input type="radio" name="payment-option" value="Interac">

							<h3>Interac e-Transfer</h3>

							<!--<img src="/img/interac2.png">-->

							<p hidden="" class="interacp">Enter your Interac e-Transfer email address:</p>

							<input style="display: none;" class="interacp" id="interac-email" type="text" name="interac-email">

							<p hidden="" class="interacp" style="float: left; width: auto; clear:none; margin-left: 0px"> <input id="interac-email-same-as-email" type="checkbox" name="interac-email-same-as-email" value="SAME">Same as email entered above</p>

						</div>

						<div style="clear: both; margin-bottom: 10px;">
							<br>
							<p class="form-label">Do you have a promo code? Enter it here:</p>
							<input id="promo" type="text" name="promo">
						</div>

						<div style="overflow: hidden; clear: both; ">
							<div onClick="gtag(\'event\',\'Select\',{event_category:\'Submission\',event_label:\'Final Submit\'}),gtag_report_conversion(url),function(){var t=document.createElement(\'script\');t.type=\'text/javascript\',t.async=!0,t.src=(\'https:\'==document.location.protocol?\'https://\':\'http://\')+\'new.invitebox.com/invitation-camp/8423/invitebox-landing.js?hash=\'+escape(window.location.hash);var s=document.getElementsByTagName(\'script\')[0];s.parentNode.insertBefore(t,e)}();"
								id="payment-proceed">SUBMIT</div>
							<input style="display:none" type="submit" id="submit" value="SUBMIT">
							<input type="reset" id="reset" value="RESET">
						</div>

					</div>

				</form>

			</div>

		</div>

	</div>

	<footer id="footer">


		<div class="container">

			<section class="links">
				<div class="row">
					<section class="3u 6u(medium) 12u$(small)">
						<h3>Sphere</h3>

						<ul class="unstyled">
							<li><a href="/">Home</a></li>
							<li><a href="/why-sphere/">Why Sphere?</a></li>
							<li><a href="/about-us/">About Us</a></li>
							<li><a href="/FAQ/">FAQ</a></li>
							<li><a href="/how-it-works">How It Works</a></li>
							<li><a href="/contact/">Contact Us</a></li>
							<li><a href="/sitemap.xml">Sitemap</a></li>
							<li><a href="/business">Sell in Bulk</a></li>
						</ul>
					</section>
					<section class="3u 6u$(medium) 12u$(small)">
						<h3>Sell my Phone</h3>
						<ul class="unstyled">
							<li><a href="/sell-my-iphone">Sell my iPhone</a></li>
							<li><a href="/sell-my-ipod-touch">Sell my iPod</a></li>
							<li><a href="/sell-my-ipad">Sell my iPad</a></li>
							<li><a href="/sell-my-samsung">Sell my Samsung</a></li>
							<li><a href="/sell-my-blackberry">Sell my BlackBerry</a></li>
							<li><a href="/sell-my-pixel">Sell my Pixel</a></li>
							<li><a href="/sell-my-lg">Sell my LG</a></li>
							<li><a href="/sell-my-htc">Sell my HTC</a></li>
						</ul>
					</section>
					<section class="3u 6u(medium) 12u$(small)">
						<h3>Connect with Us!</h3>
						<ul class="unstyled">
							<li><a href="https://www.facebook.com/spherethat">Facebook</a></li>
							<li><a href="https://www.twitter.com/spherethat">Twitter</a></li>
							<li><a href="/contact">Email</a></li>

						</ul>
					</section>
					<section class="3u$ 6u$(medium) 12u$(small)">
						<h3>Where we hang out:</h3>
						<ul class="unstyled">
							<li>326 West Cordova Street</li>
							<li>Vancouver, BC V6B 1E8</li>
							</li>
						</ul>
					</section>
				</div>
			</section>

			<div class="row">
				<div class="8u 12u$(medium)">
					<ul class="copyright">
						<div id=copyright></div>
					</ul>
				</div>
				<div class="4u$ 12u$(medium)">
					<ul class="icons">
						<li>
							<a class="icon rounded fa-facebook" href="https://www.facebook.com/spherethat"><span class="label">Facebook</span></a>
						</li>
						<li>
							<a class="icon rounded fa-twitter" href="https://www.twitter.com/spherethat/"><span class="label">Twitter</span></a>
						</li>

					</ul>

				</div>
			</div>

		</div>
	</footer>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-48810167-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag(\'js\', new Date());

	  gtag(\'config\', \'UA-48810167-1\');
	</script>

	<!--Start of Tawk.to Script-->
	<script type="text/javascript">
		var Tawk_API = Tawk_API || {},
			Tawk_LoadStart = new Date();
		(function() {
			var s1 = document.createElement("script"),
				s0 = document.getElementsByTagName("script")[0];
			s1.async = true;
			s1.src = "https://embed.tawk.to/575c821fda47edb0468702b4/default";
			s1.charset = "UTF-8";
			s1.setAttribute("crossorigin", "*");
			s0.parentNode.insertBefore(s1, s0);
		})();

		<script>
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != \'undefined\') {
      window.location = url;
    }
  };
  gtag(\'event\', \'conversion\', {
      \'send_to\': \'AW-971508199/WH0vCKzinokBEOeToM8D\',
      \'transaction_id\': \'\',
      \'event_callback\': callback
  });
  return false;
}
</script>

</body>
'
?>
