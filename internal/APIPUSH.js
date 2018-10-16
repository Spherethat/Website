$(document).on("knack-scene-render.scene_546", function(event, scene) {

  Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] == deleteValue) {
        this.splice(i, 1);
        i--;
      }
    }
    return this;
  };

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

  $("#view_1138 .kn-button-menu").after("<div class='clear'><br><textarea id='obswText' rows='10' cols='50' placeholder='Not working'></textarea></div> <br> <div><a id='bulkOBSW' class='kn-button'>Bulk OBSW</a></div>");

  var url = $(location).attr('hash').split('/');
  var invoiceID = url[3];

  $("#bulkOBSW").click(function(event) {
    event.preventDefault();
    Knack.showSpinner();
    var imeiArr = String($('#obswText').val()).split("\n").clean("");

    imeiArr.forEach(function(imei) {
      $.ajax({
        url: 'https://api.knack.com/v1/pages/scene_705/views/view_1522/records?page=1&rows_per_page=1&filters=[{"field":"field_37", "operator":"is","value":"' + imei + '"}]',
        type: 'GET',
        headers: headers,
        tryCount: 0,
        retryLimit: 3,
        statusCode: {
          429: function(response) {
            console.log("Too many Requests");
          }
        }
      }).done(function(responseB) {
        var receivedID = responseB.records[0].id;
        var data = {
          'field_212': 'Outbound Sale Wait',
          'field_793': [invoiceID]
        };
        $.ajax({
          url: 'https://api.knack.com/v1/pages/scene_715/views/view_1531/records/' + receivedID,
          type: 'PUT',
          headers: headers,
          data: JSON.stringify(data),
          tryCount: 0,
          retryLimit: 3
        }).done(function(responseC) {
          console.log(responseC);
        }).fail(function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus + ': HELLO!A ' + errorThrown);
          if (this.tryCount <= this.retryLimit) {
            //try again
            console.log("updating Recvd again");
            $.ajax(this);
            return;
          }
        });
      }).fail(function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus + ': HELLO! IMEI' + errorThrown);
        if (this.tryCount <= this.retryLimit) {
          //try again
          console.log("finding imei again");
          $.ajax(this);
          return;
        }
        return;
      });
    });
  });
  $(document).ajaxStop(function() {
    location.reload();
  });
});
