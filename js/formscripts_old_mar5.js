$(document).ready(function(){ 

		$("#UnlistedPhone a").tooltip({
			position: {my: "center top+10", at: "center bottom"}
		});

		function updateQuote() {
			//var phone 			= "IP3GS16";
			//var phonedesc 		= "iPhone 3GS 16GB"
			$("input#model").val(phone);
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
				$("#phone-description").html("for your <b>" + newCondition + "</b> condition <b>" + newCarrier + "</b> " + phonedesc + ".");	
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

		$("#getpaid-button").click(function() {
			if ($("#main-form").css("opacity") == 0) {
				$("#main-form").animate ({
					opacity: 1,
					minHeight: 540,
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

	});