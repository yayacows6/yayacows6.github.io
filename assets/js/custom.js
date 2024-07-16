   (function ($) {
            function loadHeadIncludes() {
                var width = $(window).width();
                if (width >= 1199) {
                   $("#head_include").load("head_include_desktop.html");
                } else {
                 $("#head_include").load("head_include_mobile.html");
                }
            }

            new WOW().init();
            $(window).on("load", function () {
                $(".preloader").fadeOut(100);
                loadHeadIncludes();
                $("#footer_include").load("footer_include.html");
            });

            $(window).on("resize", function () {
                $("link[href*='head_include_']").remove();
                loadHeadIncludes();
            });

            $("body").append("<div class='go-top'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='#ffffff' class='bi bi-chevron-up' viewBox='0 0 16 16'>  <path fill-rule='evenodd' d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'/></svg></div>");
            $(window).on("scroll", function () {
                var g = $(window).scrollTop();
                if (g > 600) {
                    $(".go-top").addClass("active");
                } else {
                    $(".go-top").removeClass("active");
                }
            });
            $(".go-top").on("click", function () {
                $("html, body").animate({ scrollTop: "0" }, 50);
            });

        })(jQuery);