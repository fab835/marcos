(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();   
    $('.modal').modal();
    $('ul.tabs').tabs();
    $('.slider').slider();
    $('.carousel').carousel({
        padding: 200    
	});
	autoplay().delay(4500);

  }); // end of document ready
})(jQuery); // end of jQuery name space


function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}