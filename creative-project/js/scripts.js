$(document).ready(function () {
    $('.menu').click(function () {
        $('.menu').toggleClass('open-button');
        $('.fullnav').toggleClass('open-nav');
        $('.fullnav a').toggleClass('nav-link-transition')
    });
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        speed : 20
    });
})