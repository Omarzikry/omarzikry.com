window.onload = init();
function init(){
  var header = document.getElementById('header');
  var main = document.getElementById('main');
  var footer = document.getElementById('footer');
  var body = document.getElementById('body');
  var preloader = document.getElementById('preloader');
  var preloader2 = document.getElementById('preloader2');
  var preloader3 = document.getElementById('preloader3');
  header.classList.remove('remove');
  main.classList.remove('remove');
  footer.classList.remove('remove');
  body.style.overflow = "visible";
  body.style.overflowX = "hidden";
  preloader.style.display = "none";
  preloader2.style.display = "none";
  preloader3.style.display = "none";
  body.style.backgroundColor = "#fff"
}
////toggle button
$(document).ready(function () {
  $('.nav-btn').click(function () {
    $('.main-ul').toggleClass('showing');
    $('.nav-btn').toggleClass('close');
    $('.text h1').toggleClass('nav-showing');
    $('.text h2').toggleClass('nav-showing');
    $('.text button').toggleClass('nav-showing');
  })
});

//============
// Animation
//============

AOS.init({
  duration: 1200,
})

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });