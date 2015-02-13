
$(document).ready(function() {
//animate scrolling -- http://css-tricks.com/snippets/jquery/smooth-scrolling/

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(function() {
  $(window).scroll(function(){
    $(".navbar").addClass( "navbarscroll");
    $(".navbutton").addClass( "navbuttonscroll");
  });
});


$(function() {
  $('#downarrow').click(function(){
    $('#downarrow').animate({
      'margin-top' : "+=845px",
      'opacity' : "-=1"
    },900);
  
    $('#downarrow').animate({
      'margin-top' : "-=845px",
    },900);

    $('#downarrow').animate({
      'opacity' : "+=1"
    },900);
  });


});


$(function() {
  $('#downarrow2').click(function(){
    $('#downarrow2').animate({
      'margin-top' : "+=200px",
      'opacity' : "-=1"
    },900);

    $('#downarrow2').animate({
      'margin-top' : "-=200px",
    },200);

    $('#downarrow2').animate({
      'opacity' : "+=1"
    },900);
  });


});

$(function() {
  $(window).on("scroll", function() {
      var scrollt = $(window).scrollTop();

      if (scrollt <= 100)
      {
        $(".navbar").removeClass( "navbarscroll");
        $(".navbutton").removeClass( "navbuttonscroll");
      }
  });
});


});


// $('#downarrow').css({
//   position: 'absolute',

// }).click.animate({ top: '230'});

