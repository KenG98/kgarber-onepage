
$.fn.extend({
  animateCss: function(animationName, callback, props) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

// fade the page in
$('#content-div').animateCss('fadeIn');

function goToPage(pageName) {
  $('#content-div').animateCss('fadeOut', function() {
    $('#content-div').hide();
    window.location = pageName;
  });
}

emailShowing = false;
function showemail() {
  if (!emailShowing) {
    var username = "kengarber98"
    var hostname = "gmail.com"
    $("#emailbutton").html("Click to Hide Email")
    $("#emailspace").html("<br />"+username+"@"+hostname)
    emailShowing = true
  } else {
    $("#emailbutton").html("Click to Show Email")
    $("#emailspace").html("")
    emailShowing = false
  }
}
