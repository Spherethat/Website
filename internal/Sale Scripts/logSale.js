var data = Knack.models['view_1137'].toJSON();

function priceWithTax(basePrice, taxRate) {
  let clnBP = parseFloat(basePrice);

  var clnTR = parseFloat(taxRate);
  return Math.round(clnBP * 100 * (1 + clnTR)) / 100;
}

var salePrice;
var saleData = [];

models.forEach(function(order) {
  if (order.attributes.field_1660 == '') {
    salePrice = priceWithTax(order.attributes.field_919, data.field_526_raw);
  } else {
    salePrice = priceWithTax(order.attributes.field_1160, data.field_526_raw);
  }
  saleData.push({
    field_54: order.id, // imei
    field_53: 'Wholesale', // Sold Category
    field_1164: data.id, // Bulk Sale ID
    field_55: data.field_978_raw[0].identifier, // reference/location
    field_551: data.field_978_raw[0].id, // wholesale buyer
    field_56: data.field_1202, // Sale Date
    field_57: salePrice, // Sale price
    field_74: data.field_1191, // Currency
    field_108: data.field_1195_raw, // Tax Treatment string
  });
});

let total = models.length -1;

salePost(saleData,0,total);
