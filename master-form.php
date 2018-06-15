<?php

echo '

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

		<input type="checkbox" name="sendkit" value="1" class="frm-left-mgrg-rg10">
		<p class="check-label">I need a complimentary shipping kit sent to my address.</p>
		<br><br>
		<input type="checkbox" name="terms" value="1" class="frm-left-mgrg-rg10">
		<p class="check-label">I have read and agree to the <a href="http://www.spherethat.ca/terms-and-conditions/" target="_blank">Terms &amp; Conditions</a> of this site.</p>
		<br><br>
		<input type="checkbox" name="actlock" value="1" class="frm-left-mgrg-rg10">
		<p class="check-label">I have removed the Activation Lock from my device.</p>

		<div style="overflow: auto; clear: both ">
			<div id="information-proceed">PROCEED</div>
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
		<div onClick="ga(\'send\', \'event\', \'Submission\', \'Select\', \'Final Submission\');" onClick="(function() {    var ibl = document.createElement(\'script\');    ibl.type = \'text/javascript\'; ibl.async = true;    ibl.src = (\'https:\' == document.location.protocol ? \'https://\' : \'http://\') + \'new.invitebox.com/invitation-camp/8423/invitebox-landing.js?hash=\'+escape(window.location.hash);    var s = document.getElementsByTagName(\'script\')[0];    s.parentNode.insertBefore(ibl, s);})();"
			id="payment-proceed">SUBMIT</div>
		<input style="display:none" type="submit" id="submit" value="SUBMIT">
		<input type="reset" id="reset" value="RESET">
	</div>

</div>

';
