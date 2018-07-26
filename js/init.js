(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $(".anchor-link").on("click", "a", function (event) {
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

    $("#form-contact").submit(function(e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSdFyjokPUuQnsucvT-7LemVyXUsDDYG-rLAHVnalyGJXhVWVg/formResponse", // слать надо сюда, строку с буковками надо заменить на вашу, это атрибут action формы
            data: formData,
            type: "POST",
            dataType: "xml",
            beforeSend: function() {
                $(this).find('button').attr('disabled');
            },
            statusCode: {
                0: function () {
                    $(this).html('<h4>Спасибо!</h4><p>Форма отправлена блаблабла</p>');
                },
                200: function () {
                    $(this).html('<h4>Спасибо!</h4><p>Форма отправлена блаблабла</p>');
                }
            }
        });
    });
  });
})(jQuery);
