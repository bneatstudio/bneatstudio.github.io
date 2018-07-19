(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
