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

    $(window).scroll(function() {
        if ($(window).scrollTop() >= $(window).height()) {
            $('nav').addClass('white').addClass('fixed').removeClass('inherit');
        } else {
            $('nav').addClass('inherit').removeClass('white').removeClass('fixed');
        }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
