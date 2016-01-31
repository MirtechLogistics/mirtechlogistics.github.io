var metas = document.getElementsByTagName('meta');
var i;

function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name === "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name === "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}

function register($form) {
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache       : false,
    dataType    : 'json',
    contentType: "application/json; charset=utf-8",
    error       : function(err) { $('#notification_container').html('<span class="alert">Could not connect to server. Please try again later.</span>'); },
    success     : function(data) {
     
    var message;
     
      if (data.result !== "success") {
        message = data.msg.substring(4);
        $('#notification_container').html('<span class="alert">'+message+'</span>');
      } else {
        message = 'Thanks for subscribing!<br>Please, click the link in the email we just sent you to complete the subscription process.';
        $('#mc_embed_signup_scroll').addClass('hide');
        $('#notification_container').html('<span class="success">'+message+'</span>');
      }
    }
  });
}

$(function () {

  var $form = $('#mc-embedded-subscribe-form');

  $('#mc-embedded-subscribe').on('click', function(event) {
    if(event) {event.preventDefault();}
    register($form);
  });
});

