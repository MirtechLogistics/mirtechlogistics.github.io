function gestureStart(){for(i=0;i<metas.length;i++)"viewport"===metas[i].name&&(metas[i].content="width=device-width, minimum-scale=0.25, maximum-scale=1.6")}function register(e){$.ajax({type:e.attr("method"),url:e.attr("action"),data:e.serialize(),cache:!1,dataType:"json",contentType:"application/json; charset=utf-8",error:function(e){$("#notification_container").html('<span class="alert">Could not connect to server. Please try again later.</span>')},success:function(e){var t;"success"!==e.result?(t=e.msg.substring(4),$("#notification_container").html('<span class="alert">'+t+"</span>")):(t="Thanks for subscribing!<br>Please, click the link in the email we just sent you to complete the subscription process.",$("#mc_embed_signup_scroll").addClass("hide"),$("#notification_container").html('<span class="success">'+t+"</span>"))}})}var metas=document.getElementsByTagName("meta"),i;if(navigator.userAgent.match(/iPhone/i)){for(i=0;i<metas.length;i++)"viewport"===metas[i].name&&(metas[i].content="width=device-width, minimum-scale=1.0, maximum-scale=1.0");document.addEventListener("gesturestart",gestureStart,!1)}$(function(){var e=$("#mc-embedded-subscribe-form");$("#mc-embedded-subscribe").on("click",function(t){t&&t.preventDefault(),register(e)})});