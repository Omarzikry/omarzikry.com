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

    $(window).scroll(function(){
        if ($(document).scrollTop() > main-335){
            $('.display-none').css('display','none')
            $('aside').addClass('aside-fixed')
            $('.first a').css('color','#191919')
        }
        else{
            $('aside').removeClass('aside-fixed');
            $('.display-none').css('display','block')
        }
    })

    $(window).scroll(function(){
        if ($(document).scrollTop() > main){
           $('nav').addClass('nav-fixed')
           $('.nav-none').css('display','none')
        }
        else{
            $('nav').removeClass('nav-fixed')
            $('.nav-none').css('display','flex')
        }
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