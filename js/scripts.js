/* jQuery.noConflict() for using the plugin along with other libraries. 
  You can remove it if you won't use other libraries (e.g. prototype, scriptaculous etc.) or 
  if you include jQuery before other libraries in yourdocument's head tag. 
  [more info: http://docs.jquery.com/Using_jQuery_with_Other_Libraries] */
//jQuery.noConflict(); 
/* calling thumbnailScroller function with options as parameters */
(function($) {

    $(document).ready(function() {

        var mobile = (/iphone|ipod|android|blackberry|mini|windows phone|windowssce|palm/i.test(navigator.userAgent.toLowerCase()));

        $(".intro-text .left, .intro-text .right").hide();
        setTimeout(function() {
            $(".intro-text .left").fadeIn(2000);
        }, 1000);
        setTimeout(function() {
            $(".intro-text .right").fadeIn(2000);
        }, 500);


        $('.view-team .team-member').hide();

        $(".view-team a.btn-team").click(function() {
            $(".team-member", $(this).parent()).animate({
                opacity: 1.0
            }, 200).slideToggle(500, function() {
                $("a.btn-team", $(this).parent()).text($(this).is(':visible') ? 'Close' : 'View');
            });
        });

        $("nav ul li a").click(function() {
            var strCurrentPage = $(this).text();
            $("nav ul li a").removeClass("active");
            $(this).addClass("active");
            $(".nav-detials").removeClass("active");
            var activeTab = $(this).attr("rel");
            $("#" + activeTab).addClass("active");
            if ($(window).width() < 786) {
                if (strCurrentPage.toLowerCase() != "home") {
                    $("#menu").removeClass("active").css("display", "none").fadeOut(100);
                }
                if (strCurrentPage.toLowerCase() == "home") {
                    $("#menu").removeClass("active");
                }


                $('header .header nav').fadeOut(500, function() {
                    $('header .header nav').css("display", "none").fadeOut(100);
                });
            }

        });
        $(".close").click(function() {
            $("nav ul li a").removeClass("active");
            $(".nav-detials").removeClass("active");
            if ($(window).width() < 786) {
                $("#menu").removeClass("active").css("display", "block").fadeIn(100);
                $('header .header nav').fadeOut(500, function() {
                    $('header .header nav').css("display", "none").fadeOut(100);
                });
            }
        });

        // menu  
        $("#menu").click(function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('header .header nav').fadeOut(500, function() {
                    $('header .header nav').css("display", "none").fadeOut(100);
                });

            } else {
                $(this).addClass('active');
                $('header .header nav').fadeIn(500, function() {
                    $('header .header nav').css("display", "block").fadeIn(100);
                });
            }
            //if ($(window).width() < "401") {
            //    if ($(this).hasClass('active')) {
            //        $(this).removeClass('active');
            //        $('header').animate({ 'top': '0' }, 600);
            //        $('section').animate({ 'margin-top': '0' }, 600);
            //    } else {
            //        $(this).addClass('active');
            //        $('header').animate({ 'top': '480px' }, 600);
            //        $('section').animate({ 'margin-top': '480px' }, 600);
            //    }
            //}
            //else {

            //    if ($(this).hasClass('active')) {
            //        $(this).removeClass('active');
            //        $('header').animate({ 'top': '0' }, 600);
            //        $('section').animate({ 'margin-top': '0' }, 600);
            //    } else {
            //        $(this).addClass('active');
            //        $('header').animate({ 'top': '520px' }, 600);
            //        $('section').animate({ 'margin-top': '520px' }, 600);
            //    }
            //}
        });

        $("#close").click(function() {
            $("#menu").removeClass('active');
            $('header nav').fadeOut(100, function() {
                $('header nav').css("display", "none").fadeOut(100);
            });

        });

        //$('#gallery-thumb').flexslider({
        //    animation: "slide",
        //    controlNav: false,
        //    animationLoop: false,
        //    slideshow: false,
        //    itemWidth: 23,
        //    itemMargin: 10,
        //    asNavFor: '#content-inner'
        //});
        $('#content-inner').flexslider({
            animation: "fade",
            controlNav: false,
            animationLoop: true,
            slideshow: true,
            slideshowSpeed: 7000,
            animationSpeed: 500,
            pauseOnHover: true,
            //sync: "#gallery-thumb",
            start: function(slider) {
                $('body').removeClass('loading');
            }
        });

        //$("nav ul li a").click(function () {
        //	$("nav ul li a").removeClass("active");
        //	$(this).addClass("active");
        //	$(".nav-detials").removeClass("active");
        //	var activeTab = $(this).attr("rel");
        //	$("#" + activeTab).addClass("active");
        //});
        //$(".close").click(function () {
        //	$("nav ul li a").removeClass("active");
        //	$(".nav-detials").removeClass("active");
        //});

    });

})(jQuery);