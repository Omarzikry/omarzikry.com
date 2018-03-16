    $(window).scroll(function(){
        if ($(document).scrollTop() > 270){
            $('aside').addClass('aside-fixed')
        }
        else{
            $('aside').removeClass('aside-fixed')
        }
    });