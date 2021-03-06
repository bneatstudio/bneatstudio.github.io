(function ($) {
    $(function () {
        $('.sidenav').sidenav();

        $(window).on('load', function () {
            $(this).scrollTop(0);
            $("body").css("overflow-y", "hidden");
            $('.main-preloader-wrapper').delay(1500).fadeOut();
            setTimeout(function () {
                $('.main-wrapper').css("opacity", "1");
                $('.parallax').parallax();
                $("body").css("overflow-y", "auto");
            }, 1500);
        });

        $(".anchor-link").on("click", "a", function (event) {
            var heightHeader = 60;
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top - heightHeader;
            $('body,html').animate({scrollTop: top}, 700);
        });

        $(window).scroll(function () {
            if ($(window).scrollTop() >= $(window).height() - 64) {
                $('nav').addClass('white').addClass('fixed').removeClass('inherit');
                $('a.sidenav-trigger').addClass('black-text');
            } else {
                $('nav').addClass('inherit').removeClass('white').removeClass('fixed');
                $('a.sidenav-trigger').removeClass('black-text');
            }
        });

        $("#form-contact").submit(function (e) {
            e.preventDefault();
            var formData = $(this).serialize();
            $.ajax({
                url: "https://docs.google.com/forms/d/e/1FAIpQLSdFyjokPUuQnsucvT-7LemVyXUsDDYG-rLAHVnalyGJXhVWVg/formResponse", // слать надо сюда, строку с буковками надо заменить на вашу, это атрибут action формы
                data: formData,
                type: "POST",
                dataType: "xml",
                beforeSend: function () {
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
