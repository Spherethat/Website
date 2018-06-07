$(document).ready(function(){ 

		$("#UnlistedPhone a").tooltip({
			position: {my: "center top+10", at: "center bottom"}
		});

		function updateQuote() {
			//var phone 			= "IP3GS16";
			//var phonedesc 		= "iPhone 3GS 16GB"
			$("input#model").val(phone);
			$("input#phonedesc").val(phonedesc);
			var newCarrier 		= $("select#carrier").val();
			var newCondition 	= $("select#condition").val();
			if (newCarrier == "" || newCondition == "") {
				$("#updatedQuote").html("$0");
				$("#getpaid-button").css('display', 'none');
				$("#phone-description").html("To get a quote, please tell us the carrier and condition of your phone.");
			} else {
				var newQuote = valuation(phone, newCarrier, newCondition);
				$("#getpaid-button").css("display", "block");
				$("#updatedQuote").html("$" + newQuote);
								


				$("#phone-description").html("for your <b>" + newCondition + "</b> condition <b>" + newCarrier + "</b> " + phonedesc + ".<br><br>Get your free shipping kit now:");	
                             $("#newfinalq").val("$" + newQuote);

}			
		}

		$("#condition-accordion").accordion({ heightStyle: "content", collapsible: "false"});

		$(".carrier-img a").click(function() {
			$(".carrier-img a").removeClass("active-carrier");
			$(this).addClass("active-carrier");
			if ($(this).attr('class') == "rogers active-carrier") {
				$("select#carrier").val("Rogers");
				updateQuote();
			} else if ($(this).attr('class') == "fido active-carrier") {
				$("select#carrier").val("Fido");
				updateQuote();
			} else if ($(this).attr('class') == "bell active-carrier") {
				$("select#carrier").val("Bell");
				updateQuote();
			} else if ($(this).attr('class') == "telus active-carrier") {
				$("select#carrier").val("Telus");
				updateQuote();
			} else if ($(this).attr('class') == "virgin active-carrier") {
				$("select#carrier").val("Virgin");
				updateQuote();
			} else if ($(this).attr('class') == "koodo active-carrier") {
				$("select#carrier").val("Koodo");
				updateQuote();
			} else if ($(this).attr('class') == "wind active-carrier") {
				$("select#carrier").val("Wind");
				updateQuote();
			} else if ($(this).attr('class') == "mobilicity active-carrier") {
				$("select#carrier").val("Mobilicity");
				updateQuote();
			} else if ($(this).attr('class') == "unlocked active-carrier") {
				$("select#carrier").val("Unlocked");
				updateQuote();
			}
		})


		function activateCarrier() {
			var carrierChangedTo = $("select#carrier").val();

			if (carrierChangedTo == "Rogers") {
				$(".carrier-img a").removeClass("active-carrier");
				$(".carrier-img a.rogers").addClass("active-carrier");
			} else if (carrierChangedTo == "Fido") {
				$(".carrier-img a").removeClass("active-carrier");
				$(".carrier-img a.fido").addClass("active-carrier");
			} else if (carrierChangedTo == "Bell") {
				$(".carrier-img a").removeClass("active-carrier");
				$(".carrier-img a.bell").addClass("active-carrier");
			} else if (carrierChangedTo == "Telus") {
				$(".carrier-img a").removeClass("active-carrier");
				$(".carrier-img a.telus").addClass("active-carrier");
			} else if (carrierChangedTo == "Virgin") {
				$(".carrier-img a").removeClass("active-carrier");
				$(".carrier-img a.virgin").addClass("active-carrier");
			} else if (carrierChangedTo == "Koodo") {
				$(".carrier-img a").removeClass("active-carrier");
				$(".carrier-img a.koodo").addClass("active-carrier");
			} else if (carrierChangedTo == "Wind") {
				$(".carrier-img a").removeClass("active-carrier");
				$(".carrier-img a.wind").addClass("active-carrier");
			} else if (carrierChangedTo == "Mobilicity") {
				$(".carrier-img a").removeClass("active-carrier");
				$(".carrier-img a.mobilicity").addClass("active-carrier");
			} else if (carrierChangedTo == "Unlocked") {
				$(".carrier-img a").removeClass("active-carrier");
				$(".carrier-img a.unlocked").addClass("active-carrier");
			}
		}

		$("h3#mint-condition").click(function() {
			$("select#condition").val("Mint");
			updateQuote();
		});

		$("h3#good-condition").click(function() {
			$("select#condition").val("Good");
			updateQuote();
		});

		$("h3#rough-condition").click(function() {
			$("select#condition").val("Rough");
			updateQuote();
		});

		$("h3#broken-condition").click(function() {
			$("select#condition").val("Broken");
			updateQuote();
		});

		$("select#carrier, select#condition").change(function() {
			updateQuote();
			activateCarrier();

			if ($("select#condition").val() == "Mint") {
				$("#condition-accordion").accordion("option", "active", 0);
			} else if ($("select#condition").val() == "Good") {
				$("#condition-accordion").accordion("option", "active", 1);
			} else if ($("select#condition").val() == "Rough") {
				$("#condition-accordion").accordion("option", "active", 2);
			} else if ($("select#condition").val() == "Broken") {
				$("#condition-accordion").accordion("option", "active", 3);
			}
		});

var mql = window.matchMedia("screen and (max-width : 820px)")
if (mql.matches){ // if media query matches
var formHeight = 900;
		var paymentFormHeight = 550;
}
else{
 var formHeight = 620;
		var paymentFormHeight = 450;
}
		

		$("#getpaid-button").click(function() {
			if ($("#main-form").css("opacity") == 0) {
				$("#main-form").animate ({
					opacity: 1,
					minHeight: formHeight,
					
				}, 1000, function() {
					$("html, body").animate ({
						scrollTop: $("#main-form").offset().top
					}, 700);
				});
			} else {
				$("html, body").animate ({
					scrollTop: $("#main-form").offset().top
				}, 700);
			}
			
		});

		$("#reset").click(function() {
			$(this).closest('form').find("input[type=text]").val("");
		});

		$("input:radio[name=payment-option]").click(function() {
			var paymentValue = $(this).val();
			if (paymentValue == "Cheque") {
				$("input#paypal-email").attr("readonly", true);
				$("input#paypal-email-same-as-email").attr("disabled", true);
			} else if (paymentValue == "PayPal") {
				$("input#paypal-email").attr("readonly", false);
				$("input#paypal-email-same-as-email").attr("disabled", false);
			}
		})

		$("#paypal-email-same-as-email").change(function() {
			if(this.checked) {
				$("#paypal-email").val($("#main-form input#email").val());
			} else {
				$("#paypal-email").val("");
			}
		});

		$("#paypal-email").on('input', function() {
			$("#paypal-email-same-as-email").prop("checked", false);
			var paypalEmailValue = $("#paypal-email").val();
			var contactEmailValue = $("#main-form input#email").val();
			if (paypalEmailValue == contactEmailValue) {
				$("#paypal-email-same-as-email").prop("checked", true);
			}
		})

		$("#information-proceed").click(function () {
			$("#product-quote").submit();
			var str = $("#product-quote").serialize();
			$.ajax({
				type: "POST",
				url: "/contact_form/contact_process.php",
				data: str,
				success: function(msg) {
					// Message Sent - Show the 'Thank You' message and hide the form
					if(msg == 'OK') {
						$("#note").html("");
						$('#main-form').height(formHeight)
						if ($("#payment-form").css("opacity") == 0) {
							$("#payment-form").animate ({
								opacity: 1,
								minHeight: paymentFormHeight,
							}, 1000);
						}
						$("html, body").animate ({
							scrollTop: $("#payment-form").offset().top
						}, 700);
					} else {
						result = msg;
						$('#note').html(result);
						$("html, body").animate ({
							scrollTop: $("#main-form").offset().top
						}, 700);
						$('#note').fadeIn();
						var noteHeight = $('#note').height();
						$('#main-form').height(noteHeight + formHeight + 13)
					}
				}
			});
			return false;
		});

		$("#payment-proceed").click(function () {
			$("#product-quote").submit()
			var str = $("#product-quote").serialize();
			$.ajax({
				type: "POST",
				url: "/contact_form/contact_process_final.php",
				data: str,
				success: function(msg) {
					// Message Sent - Show the 'Thank You' message and hide the form
					if(msg == 'OK') {
						$("#note").html("<div class='notification_ok'><b>Thank you!</b> Your request has been sent.<br><br>We've also sent you a confirmation e-mail. Note that it may take up to 24 hours to recieve it.<br><br>Didn't receive the e-mail? <b>Check your junk mail folder</b> - sometimes our emails end up there.<br><br>If you chose to receive a physical shipping kit, you should receive it in the mail in 3-7 business days.</div><script src='http://www.spherethat.ca/js/wowtest.js'></script>");
						$("#fields").hide();
						$("#payment-form").hide();
					} else {
						result = msg.split("//DIVIDER//");
						if (result[0] != '<div class="notification_error"></div>') {
							$("#note").html(result[0]);
							var noteHeight = $('#note').height();
							$('#main-form').height(noteHeight + formHeight + 13);
							$("html, body").animate ({
								scrollTop: $("#main-form").offset().top
							}, 700);					
						}
						if (result[0] == '<div class="notification_error"></div>') {
							$("#note").html("");
							$('#main-form').height(formHeight);
						}
						if (result[1] != '<div class="notification_error"></div>') {
							$("#payment-note").html(result[1]);
							var paymentNoteHeight = $("#payment-note").height();
							$("#payment-form").height(paymentNoteHeight + paymentFormHeight + 8);
						}
						if (result[1] == '<div class="notification_error"></div>') {
							$("#payment-note").html("");
							$("#payment-form").height(paymentFormHeight);
						}
					}
				}
			});
			return false;
		});

});	