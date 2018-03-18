  /*  $(window).scroll(function(){
        if ($(document).scrollTop() > 270){
            $('aside').addClass('aside-fixed')
        }
        else{
            $('aside').removeClass('aside-fixed')
        }
    });*/

    var aside = document.getElementById('aside');
    var main = $('main').offset().top
    var about = $('.about').offset().top

    $(window).scroll(function(){
        if ($(document).scrollTop() > main-335){
            $('.display-none').css('display','none')
            $('aside').addClass('aside-fixed')
            $('.first').addClass('active')
            $('.second').removeClass('active')
        }
        else{
            $('aside').removeClass('aside-fixed');
            $('.display-none').css('display','block')
        }

        if ($(document).scrollTop() > about-500){
          console.log('it')
          $('.first').removeClass('active')
          $('.second').addClass('active')
      }
    })

    $(window).scroll(function(){
        if ($(document).scrollTop() > main){
           $('nav').addClass('nav-fixed')
           $('.nav-none-it').addClass('nave-none')
        }
        else{
            $('nav').removeClass('nav-fixed')
            $('.nav-none-it').removeClass('nave-none')
        }
    })
    
    //nav btn
    $('.nav-btn').click(function(){
      $('nav').toggleClass('height');
      $('nav ul').toggleClass('height1');
      $('.nav-btn').toggleClass('close');
      $('body').toggleClass('over-hidden');
    })















    // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
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
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});