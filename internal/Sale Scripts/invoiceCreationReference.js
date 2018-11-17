$(document).on('knack-scene-render.scene_546', function(event, scene) {
  $('#view_1160 .view-header').after(
    "<div style='padding:15px'><a href='#' id='webmerge' class='kn-button'>Create Invoice</a></div>"
  );
  // link hander: Print Report
  $('#webmerge').click(function(event) {
    // get data
    let data = Knack.models['view_1137'].toJSON();
    let models = Knack.models['view_1160'].data.models;
    let products = [];

    for (let i = 0; i < models.length; i++) {
      products.push({
        model: models[i].attributes.field_1007_raw,
        condition: models[i].attributes.field_1008_raw,
        carrier: models[i].attributes.field_1009_raw,
        quantity: models[i].attributes.field_989_raw,
        each: '$' + models[i].attributes.field_994_raw,
        sum: '$' + models[i].attributes.field_993_raw,
      });
    }

    let objToday = new Date();

    var weekday = new Array(
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    );

    var dayOfWeek = weekday[objToday.getDay()];

    var domEnder = (function() {
      var a = objToday.getDate();
      var j = a % 10,
        k = a % 100;
      if (j == 1 && k != 11) {
        return 'st';
      }
      if (j == 2 && k != 12) {
        return 'nd';
      }
      if (j == 3 && k != 13) {
        return 'rd';
      }
      return 'th';
    })();

    var dayOfMonth =
      today + (objToday.getDate() < 10)
        ? '0' + objToday.getDate() + domEnder
        : objToday.getDate() + domEnder;

    var months = new Array(
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    );

    var curMonth = months[objToday.getMonth()];

    var curYear = objToday.getFullYear();

    var curHour =
      objToday.getHours() > 12
        ? objToday.getHours() - 12
        : objToday.getHours() < 10
          ? '0' + objToday.getHours()
          : objToday.getHours();

    var curMinute =
      objToday.getMinutes() < 10
        ? '0' + objToday.getMinutes()
        : objToday.getMinutes();

    var curSeconds =
      objToday.getSeconds() < 10
        ? '0' + objToday.getSeconds()
        : objToday.getSeconds();

    var curMeridiem = objToday.getHours() > 12 ? 'PM' : 'AM';
    var today = curMonth + ' ' + dayOfMonth + ',' + curYear;

    Knack.showSpinner();

    $.ajax({
      mimeType: 'application/json',
      url: 'https://www.webmerge.me/merge/125749/z9i9ya',
      data: {
        products: products,
        invoicecode: data.field_665_raw,
        storename: data.field_978_raw[0].identifier,
        storeaddress1:
          data.field_505_raw.street + ' ' + data.field_505_raw.street2,
        storecity: data.field_505_raw.city,
        storeprovince: data.field_505_raw.state,
        storepostal: data.field_505_raw.zip,
        subtotal: '$' + data.field_1002_raw,
        totaltaxamount: '$' + data.field_1003_raw,
        grandtotalwow: '$' + data.field_1004_raw,
        nicedate: today,
      },
      type: 'POST',
      success: function() {
        alert('Invoice Created!');
        Knack.hideSpinner();
      },
      error: function() {
        alert('Invoice Created!');
        Knack.hideSpinner();
      },
    });
  });
});
