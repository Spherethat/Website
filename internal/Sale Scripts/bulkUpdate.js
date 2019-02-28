$(document).on('knack-scene-render.scene_546', function(event, scene) {
  let headers = {
    'Content-Type': 'application/json',
    'X-Knack-Application-Id': '5803cd7ca2fe59e9154c96e3',
    'X-Knack-REST-API-Key': '84e10cb0-93d4-11e6-ae4f-3bccb458bbf0',
  };

  $('#view_1592 .view-header').after(
    "<input type='submit' value='Bulk Pricer' id='bulkPricer'> &nbsp &nbsp <input type='submit' value='Log Sale' id='logSale'><br><div id='priceTable'> </div><div id='priceSubmitCont'><br><input type='submit' id='priceSubmit' value='Batch Price Update'><br><br></div>"
  );

  $('#view_1643 ul').append(
    '<li class="kn-button"><a href="#" id="createInvoice"><span>Create Invoice</span></a></li><li class="kn-button"><a href="#" id="addShipping"><span>Add Shipping Cost</span></a></li>'
  );

  $('#priceSubmitCont').hide();

  //Clean Date
  let today = new Date();
  let months = [
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
    'December',
  ];
  let dateClean =
    months[today.getMonth()] +
    ' ' +
    today.getDate() +
    ', ' +
    today.getFullYear();

  let finalSku = [];
  let models = Knack.models['view_1592'].data.models;
  let data = Knack.models['view_1137'].toJSON();

  $('#bulkPricer').click(function(event) {
    $('#priceTable').empty();
    let skuData = [];
    for (var i = 0; i < models.length; i++) {
      skuData.push({
        sku: models[i].attributes.field_32_raw[0].identifier,
        id: models[i].attributes.id,
      });
    }
    console.log(data);
    let skus = skuData.map(function(item) {
      return item.sku;
    });

    let skusUnique = Array.from(new Set(skus));

    skusUnique.forEach(function(sku) {
      let arrTemp = [];

      skuData.forEach(function(item) {
        if (item.sku === sku) {
          arrTemp.push(item.id);
        }
      });
      // console.log(arrTemp);
      let object = {
        Sku: sku,
        id: arrTemp,
        quant: arrTemp.length,
      };
      // console.log(object)
      finalSku.push(object);
    });
    console.log(finalSku);

    let table = $('<table>').css('width', '20%');
    for (i = 0; i < skusUnique.length; i++) {
      let row = $('<tr>')
        .addClass('bar')
        .html(
          '<td>' +
            skusUnique[i] +
            '</td>' +
            '<td><input type="number" step="0.01" id="price' +
            skusUnique[i] +
            '"></td>'
        );
      table.append(row);
    }
    $('#priceTable').append('<br>');
    $('#priceTable').append(table);
    $('#priceSubmitCont').show();
  });

  $('#priceSubmit').click(function(event) {
    function batchOverridePrice(itemData, priceData, i, count) {
      Knack.showSpinner();
      let id = itemData.id[i];

      $.ajax({
        url:
          'https://api.knackhq.com/v1/pages/scene_740/views/view_1625/records/' +
          id,
        headers: headers,
        type: 'PUT',
        data: JSON.stringify(priceData),
      }).then(function(response) {
        if (i < count) {
          i = i + 1;
          batchOverridePrice(itemData, priceData, i, count);
        } else {
          console.log('Recursive Api call done');
        }
      });
    }

    finalSku.forEach(function(item) {
      newPrice = $('input#price' + item.Sku).val();
      if (newPrice === '') {
        console.log(item.Sku + ' has no override price assigned');
      } else {
        let total = item.id.length - 1;
        let priceObj = {
          field_1660: newPrice,
        };
        batchOverridePrice(item, priceObj, 0, total);
      }
    });
  });

  function salePost(reqBody, count, total, step) {
    if (count <= total) {
      Knack.showSpinner();
      let body = reqBody[count];
      $.ajax({
        url:
          'https://api.knackhq.com/v1/pages/scene_705/views/view_1591/records/',
        headers: headers,
        type: 'POST',
        data: JSON.stringify(body),
      }).then(function(response) {
        console.log(response);
        count = count + step;
        salePost(reqBody, count, total, step);
      });
    } else {
      console.log('Recursive Api call done');
    }
  }

  $('#logSale').click(function(event) {
    if (confirm('Good to go?')) {
      function priceWithTax(basePrice, taxRate) {
        let clnBP = parseFloat(basePrice);
        let clnTR = parseFloat(taxRate);
        return Math.round(clnBP * 100 * (1 + clnTR)) / 100;
      }

      let saleData = [];

      models.forEach(function(order) {
        let salePrice;

        if (order.attributes.field_1660 === '') {
          salePrice = priceWithTax(
            order.attributes.field_919_raw,
            data.field_526_raw
          );
        } else {
          salePrice = priceWithTax(
            order.attributes.field_1660,
            data.field_526_raw
          );
        }

        saleData.push({
          field_54: [order.id], // imei
          field_53: 'Wholesale', // Sold Category
          field_1164: [data.id], // Bulk Sale ID
          field_55: data.field_978_raw[0].identifier, // reference/location
          field_551: [data.field_978_raw[0].id], // wholesale buyer
          field_56: data.field_1202, // Sale Date
          field_57: salePrice, // Sale Price
          field_74: data.field_1191, // Currency
          field_108: data.field_1195_raw, // Tax Treatment string
        });
      });

      let total = models.length - 1;

      salePost(saleData, 0, total, 4);
      salePost(saleData, 1, total, 4);
      salePost(saleData, 2, total, 4);
      salePost(saleData, 3, total, 4);
    } else {
    }
  });

  $('#createInvoice').click(function(event) {
    event.preventDefault();

    function justSale(basePrice, taxRate) {
      let clnBP = parseFloat(basePrice);
      let clnTR = parseFloat(taxRate);
      return Math.round(clnBP * 100 * (1 / (1 + clnTR))) / 100;
    }

    let sendData = {
      invoicecode: data.field_665_raw,
      storename: data.field_978_raw[0].identifier,
      storeaddress1:
        data.field_505_raw.street + ' ' + data.field_505_raw.street2,
      storecity: data.field_505_raw.city,
      storeprovince: data.field_505_raw.state,
      storepostal: data.field_505_raw.zip,
      subtotal: justSale(data.field_1179_raw, data.field_526_raw),
      totaltaxamount:
        data.field_1179_raw - justSale(data.field_1179_raw, data.field_526_raw),
      grandtotal: data.field_1179_raw,
      nicedate: dateClean,
    };

    let url = $(location)
      .attr('hash')
      .split('/');
    let invoiceID = url[3]; //use as ID to filter out data

    function ReqSales(bsId) {
      $.ajax({
        url:
          'https://api.knack.com/v1/objects/object_6/records?page=1&rows_per_page=1000&filters=[{"field":"field_1164", "operator":"is","value":[' +
          bsId +
          ']}]',
        headers: headers,
        me: 'GET',
      }).then(function(response) {
        console.log(response.records);
      });
    }

    function add(a, b) {
        return parseFloat(a) + parseFloat(b);
      }

      var settings = {
        async: true,
        crossDomain: true,
        url:
          'https://api.knack.com/v1/objects/object_6/records?page=1&rows_per_page=1000&filters=[{%22field%22:%22field_1164%22,%20%22operator%22:%22is%22,%22value%22:[%225bef4ca21154dd1902fc0580%22]}]',
        method: 'GET',
        headers: {
          'X-Knack-Application-Id': '5803cd7ca2fe59e9154c96e3',
          'X-Knack-REST-API-Key': '84e10cb0-93d4-11e6-ae4f-3bccb458bbf0',
        },
      };

      $.ajax(settings).then(function(response) {
        console.log(response.records.length);

        var rawSales = [];

        for (var i = 0; i < response.records.length; i++) {
          rawSales.push({
            model: response.records[i].field_241,
            condition: response.records[i].field_464,
            carrier: response.records[i].field_243,
            preTaxPrice: parseFloat(response.records[i].field_1717_raw).toFixed(2),
            Price: parseFloat(response.records[i].field_57_raw).toFixed(2),
            unique:
              response.records[i].field_241 +
              '//' +
              response.records[i].field_464 +
              '//' +
              response.records[i].field_243 +
              '//' +
              parseFloat(response.records[i].field_1717_raw).toFixed(2),
            identifier: response.records[i].field_54_raw[0].identifier,
          });
        }

        var lineItems = rawSales.map(function(item) {
          return item.unique;
        });

        console.log(lineItems)

        var salesSummary = [];

        lineItems.forEach(function(saleItem) {
          var priceArr = [];

          rawSales.forEach(function(sale) {
            if (sale.unique == saleItem) {
              priceArr.push(sale.preTaxPrice);
            }
          });

          var desc = saleItem.split('//');
          var grade = desc[1].split(' ');

          var object = [
            desc[0], //Model Name
            grade[1], //Grade
            desc[2], //Carrier
            priceArr.length, //Quantity
            "$"+desc[3], //Price
            "$"+parseFloat(priceArr.reduce(add, 0)).toFixed(2) //subtotal
          ];

          salesSummary.push(object);
        })

        console.log(salesSummary)
      });

  $('#addShipping').click(function(event) {
    event.preventDefault();
    alert('still in Dev');
  });
});
