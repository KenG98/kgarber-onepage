// show and hide as appropriate before we begin...
$('#done-loading-text').hide()
$('#main-screen').hide()

$('#about-page').hide()
$('#resume-page').hide()
$('#contact-page').hide()

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

function loadingSplash() {
  // $('#loading-text').animateCss('fadeIn', function() {
  //   $('#loading-text').animateCss('fadeOut', function() {
  //     $('#loading-text').animateCss('fadeIn', function() {
  //       $('#loading-text').animateCss('fadeOut', function() {
          $('#loading-text').hide();
          $('#done-loading-text').show();
          $('#done-loading-text').animateCss('fadeIn');
  //       });
  //     });
  //   });
  // });
}

//display the loading splash (later, make this not so 
// long, just as long as it needs)

loadingSplash()

// clicking the enter button
$('#enter-btn').click(function(){
  $('#loading-div').animateCss('fadeOut', function() {
    $('#loading-div').hide()

    $('#about-link').hide()
    $('#resume-link').hide()
    $('#contact-link').hide()

    $('#main-screen').show()
    $('#main-screen').animateCss('fadeIn', function() {
      $('#about-link').show()
      $('#resume-link').show()
      $('#contact-link').show()
      $('#about-link').animateCss('bounceInUp');
      $('#resume-link').animateCss('bounceInUp');
      $('#contact-link').animateCss('bounceInUp');
    });
  });
});

function goToPage(pageName) {
  $('#main-links').animateCss('zoomOut', function() {
    $('#main-links').hide()
    $('#'+pageName+'-page').show()
    $('#'+pageName+'-page').animateCss('zoomIn')
  });
}

// handle a back button click on a page
function backButtonClick(btnName) {
  $('#'+btnName+'-page').animateCss('zoomOut', function() {
    $('#'+btnName+'-page').hide()
    $('#main-links').show()
    $('#main-links').animateCss('zoomIn')
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
