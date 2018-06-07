$(document).ready(function(){ 

		$("#UnlistedPhone a").tooltip({
			position: {my: "center top+10", at: "center bottom"}
		});

		function updateQuote() {
			//var phone 			= "IP3GS16";				example variables;;; actual variables on page in first script.
			//var phonedesc 		= "iPhone 3GS 16GB"
			$("input[name='model']").val(gadget);
			//var newCarrier 		= $("select#carrier").val();
			var newCondition 	= $("select#condition").val();
			if (newCondition == "") {
				$("#updatedQuote").html("$0");
				$("#getpaid-button").css('display', 'none');
				$("#phone-description").html("To get a quote, please tell us the condition of your gadget.");
			} else {
				var newQuote = valuation(gadget, null, newCondition);
				$("#getpaid-button").css("display", "block");
				$("#updatedQuote").html("$" + newQuote);
				$("#phone-description").html("for your <b>" + newCondition + "</b> condition " + gadgetdesc + ".<br><br>Get your free shipping kit now:");	
			}			
		}

		$("#condition-accordion").accordion({ heightStyle: "content", collapsible: "false"});

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

		$("select#condition").change(function() {
			updateQuote();

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
		
		var MMHeight = 630;

		$("#getpaid-button").click(function() {
			if ($("#main-form").css("opacity") == 0) {
				$("#main-form").animate ({
					opacity: 1,
					minHeight: formHeight ,	
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
				url: "/contact_form/contact_process_electronics.php",
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
				url: "/contact_form/contact_process_electronics_final.php",
				data: str,
				success: function(msg) {
					// Message Sent - Show the 'Thank You' message and hide the form
					if(msg == 'OK') {
						$("#note").html("<div class='notification_ok'>Your information has been submitted. Thank you!<br>Look to hear from us within 24 hours.</div>");
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