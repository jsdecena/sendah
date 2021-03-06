$(document).ready(function(){
    
    var ddElement = '.top-newsletter-dropdown';

    //CHECK FOR THE COOKIEs BEFORE LOADING THE POP UP AGAIN
    if (Cookies.get('mchimp-pop') != 'loaded'){
        //CHECK THE WINDOW WIDTH IF SMALL DEVICE OR WEB
        if ($(window).width() > 640) {
            //ON THE PAGE LOAD, REVEAL THE NEWSLETTER TOP
            $(ddElement).show().animate({'margin-top' : 0});
        }else{
            //ON THE PAGE LOAD, REVEAL THE NEWSLETTER TOP
            $(ddElement).show().animate({'margin-top' : 51});
        };
    }

    //WHEN THE USER CLICKS THE CLOSE BUTTON, ANIMATE HIDE THE NEWSLETTER TOP
    $('#btn-close-newsletter').on('click', function(){

        //CHECK THE WINDOW WIDTH IF SMALL DEVICE OR WEB
        if ($(window).width() > 640) {
            $(ddElement).animate({'margin-top' : -126 });
        }else{
            $(ddElement).animate({'margin-top' : -260 });
        };

        Cookies.set('mchimp-pop', 'loaded');
    });

    /*MENU*/
    $('#nav-expander').on('click',function(e){
        e.preventDefault();
        $('body').toggleClass('nav-expanded');
    });
    $('#nav-close').on('click',function(e){
        e.preventDefault();
        $('body').removeClass('nav-expanded');
    });

    // Initialize navgoco with default options
    $(".main-menu, .menu-lg-sd").navgoco({
        caret: '<span class="caret"></span>',
        accordion: false,
        openClass: 'open',
        save: true,
        cookie: {
            name: 'navgoco',
            expires: false,
            path: '/'
        },
        slide: {
            duration: 300,
            easing: 'swing'
        }
    });

    /*SUBMENU*/
    $('.sub').hover(function(){
        $(this).find('ul.sub').show();
    }, function(){
        $(this).find('ul.sub').hide();
    });    
});