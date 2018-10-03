$(document).on("knack-scene-render.scene_697", function(event, scene) {

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

  $("#view_1485 .kn-submit").before("<div><p>Scan Imeis Below</p><textarea id='textArea' rows='10' cols='50'></textarea></div> <br> <div><a href='#' id='massRecv' class='kn-button'>Mass Receive</a></div>");
  $("#view_1485 .kn-submit").hide();

var data = {
  "field_1462": "knackTest - short text"
}

  $("#massRecv").click(function(event) {
    event.preventDefault();

    $.ajax({
      async: true,
      url: 'https://api.knack.com/v1/objects/object_88/records/',
      type: 'POST',
      headers: {
        "Content-Type": "application/json",
        "X-Knack-Application-Id": "5803cd7ca2fe59e9154c96e3",
        "X-Knack-REST-API-KEY": "84e10cb0-93d4-11e6-ae4f-3bccb458bbf0",
      },
      data: JSON.stringify(data),
      success: function(response) {
        console.log(response);
      },
      error: function(req, err) {
        console.log(err);
      }
    });
  });
});
