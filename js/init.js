(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $("#menu").on("click", "a", function (event) {
        var heightHeader = 60;
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - heightHeader;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= $(window).height() - 64) {
            $('nav').addClass('white').addClass('fixed').removeClass('inherit');
        } else {
            $('nav').addClass('inherit').removeClass('white').removeClass('fixed');
        }
    });
  });
})(jQuery);
