//animated nav
/*function myNav() {
    document.getElementById("nav").style.WebkitAnimation = "nav-motion 2s ease forwards"; // Code for Chrome, Safari, and Opera
    document.getElementById("nav").style.animation = "nav-motion 2s ease forwards";
}*/

$(document).ready(function(){
    $(".bars").click(function(){
        $("#nav").toggleClass("nav-motion");
    });
});


///slider

$(function() {
    var header = $('header');
    var backgrounds = new Array(
    'url("images/hero7.jpeg")',
    'url("images/hero5.jpeg")',
    'url("images/hero10.jpeg")',
    'url("images/hero6.jpeg")',
    );
    var current = 0;
    
    function nextBackground() {
    header.css(
    'background',
    backgrounds[current = ++current % backgrounds.length]
    );
    header.css('background-size', 'cover');
    header.css('background-position', 'bottom');
    setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
    header.css('background', backgrounds[0]);
    header.css('background-size', 'cover');
    header.css('background-position', 'bottom');
    //header.css('background-position', 'center')
    });