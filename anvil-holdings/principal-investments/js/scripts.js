  /*  $(window).scroll(function(){
        if ($(document).scrollTop() > 270){
            $('aside').addClass('aside-fixed')
        }
        else{
            $('aside').removeClass('aside-fixed')
        }
    });*/
/////////////////////ASIDE
    var aside = document.getElementById('aside');
    var main = $('main').offset().top
    var strategy = $('.strategy').offset().top
    var people = $('#people').offset().top
    var transactions = $('.transactions').offset().top
    var news = $('.news').offset().top
    var contact = $('.contact').offset().top

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
        };

        if ($(document).scrollTop() > strategy-480){
          $('.first').removeClass('active')
          $('.second').addClass('active')
          $('.third').removeClass('active')
      };
      if ($(document).scrollTop() > people-480){
        $('.second').removeClass('active')
        $('.third').addClass('active')
        $('.fourth').removeClass('active')
    };
    if ($(document).scrollTop() > transactions-480){
      $('.third').removeClass('active')
      $('.fourth').addClass('active');
      $('.fifth').removeClass('active');
  }
  if($(document).scrollTop() > news-480){
    $('.fourth').removeClass('active')
      $('.fifth').addClass('active');
  }
  if($(document).scrollTop() > contact-380){
    $('.fifth').removeClass('active')
      $('.sixth').addClass('active')
  }
    else{
      $('.sixth').removeClass('active')
    }
    })
    //////////
    //slide z-index
  var counter = 1;
  var counter2 = 2;
  var counter3 = 3;
  var int = setInterval(function(){
    $("#slider1").attr("class", "slide" + counter);
    $("#slider2").attr("class", "slide" + counter2);
    $("#slider3").attr("class", "slide" + counter3);
    if (counter === 3){
        counter = 1; // If counter = 3, set it back to 1 for next loop
    } else {
        counter++; // Else, add 1 to the counter
    }
    if (counter2 === 3){
      counter2 = 1; // If counter = 3, set it back to 1 for next loop
  } else {
      counter2++; // Else, add 1 to the counter
  }
  if (counter3 === 3){
    counter3 = 1; // If counter = 3, set it back to 1 for next loop
} else {
    counter3++; // Else, add 1 to the counter
}
  }, 5000);
  ////////////

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