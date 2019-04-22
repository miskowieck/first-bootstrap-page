let hashnav = "";
let x = window.matchMedia("(max-width: 576px)")
$(document).ready(function(){
  
  $('#navbarSupportedContent').collapse({
    toggle: true
});
  $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
    if (hashnav !== "") {
      $('html, body').animate({
        scrollTop: ($(hashnav).offset().top - $("#main-nav").outerHeight())
      }, 800, function(){
        
      });
      hashnav = "";
    } 
});

  $("a").on('click', function(event) {
      hashnav = this.hash;
      event.preventDefault();
      if(x.matches){
      $('#navbarSupportedContent').collapse('hide');
      }else{
        if (hashnav !== "") {
      $('html, body').animate({
        scrollTop: ($(hashnav).offset().top - $("#main-nav").outerHeight())
      }, 800, function(){
        
      });
      hashnav = "";
    } 
      }

      
  });

  $(window).scroll(function () {

/* Check the location of each desired element */
$('.fade').each(function (i) {

    var bottom_of_object = $(this).position().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object) {

        $(this).animate({
            'opacity': '1'
        }, 500);

    }

});

});
});