function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = $.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) == (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
  // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
  beforeSend: function(xhr, settings) {
    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
      xhr.setRequestHeader("X-CSRFToken", csrftoken);
    }
  }
});

var headers = {
  "Content-Type": "application/json",
  "X-Knack-Application-Id": "5803cd7ca2fe59e9154c96e3",
  "X-Knack-REST-API-KEY": "84e10cb0-93d4-11e6-ae4f-3bccb458bbf0",
};

var data = Knack.models["view_1137"].toJSON(),
  models = Knack.models["view_1592"].data.models;


function salePost(body) {
  $.ajax({
    url: 'https://XXXXXX',
    headers: headers,
    type: 'POST',
    data: JSON.stringify(body)
  }).done(function(response) {
    console.log(response);
  });
}

function priceWithTax(basePrice, taxRate) {
  var clnBP = parseFloat(basePrice), clnTR = parseFloat(taxRate);
  return Math.round(clnBP * 100 * (1 + clnTR)) / 100;
}

var salePrice;

models.forEach(function(order) {
  if (order.attributes.field_1660 == "") {
    salePrice = priceWithTax(order.attributes.field_919, data.field_526_raw);
  } else {
    salePrice = priceWithTax(order.attributes.field_1160, data.field_526_raw);
  }

  var saleObj = {
    "field_54": order.id, //imei
    "field_53": "Wholesale", // Sold Category
    "field_1164": data.id, // Bulk Sale ID
    "field_55": data.field_978_raw[0].identifier, // reference/location
    "field_551": data.field_978_raw[0].id, // wholesale buyer
    "field_56": data.field_1202, // Sale Date
    "field_57": salePrice, // Sale price
    "field_74": data.field_1191, //Currency
    "field_108": data.field_1195_raw //Tax Treatment string
  };

  salePost(saleObj);
});
