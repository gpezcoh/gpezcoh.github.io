
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

// $(function() {
//   $('#uparrow').click(function(){
//     $('#uparrow').animate({
//       'margin-top' : "-=845px",
//       'opacity' : "-=1"
//     },900);

//     $('#uparrow').animate({
//       'margin-top' : "+=845px",
//     },900);

//     $('#uparrow').animate({
//       'opacity' : "+=1"
//     },900);
//   });
// });


});


// $('#downarrow').css({
//   position: 'absolute',

// }).click.animate({ top: '230'});

