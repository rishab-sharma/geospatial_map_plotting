/**
*
* ---------------------------------------------------------------------------
*
* Template :    Luna | Coming Soon Html 5 Template
* Author :      CoderHut
* Author URI :  http://hiknik.com/luna/
* Version :     1.0
*
* --------------------------------------------------------------------------- 
*
*/

(function ($) {

    "use strict";

    $(document).on('ready', function () {

        /*  ======================================
            Sidebar menu
        ====================================== */
        var sidbarBtn  = $('.siderbar-btn, .theme-btn');
        sidbarBtn.on('click', function () {
            $('.sidebar-contant').css('right', '0');
            $('.particle-wrappar, .bubble-wrappar, .main-wrappar, .gradient-wrappar, .polygon-wrappar, .smoky-wrappar, .solid-color-wrappar, #main-bgvideo').css('height', '100vh');
            return false;
        });
        
        var aboutI = $('.about-us-area i');
        aboutI.on('click', function () {
            $('.sidebar-contant').css('right', '-100%');
            $('.particle-wrappar, .bubble-wrappar, .main-wrappar, .gradient-wrappar, .polygon-wrappar, .smoky-wrappar, .solid-color-wrappar, #main-bgvideo').css('height', '100%');
            return false;
        });
        
        /*  ======================================
            join us area
        ====================================== */
        var ghostBtnC = $('.theme-ghost-btn');
        ghostBtnC.on('click', function () {
            $('.join-us-area').addClass('visble-joinus');
            return false;
        });

        var contenI = $('.jon-us-content i');
        contenI.on('click', function () {
            $('.join-us-area').removeClass('visble-joinus');
            return false;
        });
        
        /*  ======================================
            Refresh page on resize
        ====================================== */
        
        $(window).bind('resize', function (e) {
            if (window.RT) clearTimeout(window.RT);
            window.RT = setTimeout(function () {
                this.location.reload(false); /* false to get page from cache */
            }, 100);
        });
        

        
    });

    $(window).on('load', function () {

        /*  ======================================
            Preloader
        ====================================== */
        var themePreloader = $('.theme-preloader');
        themePreloader.fadeOut('500');
        
    });
}(jQuery));