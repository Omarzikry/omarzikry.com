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
    var values = $('.values').offset().top
    var leader = $('.leader').offset().top
    var business = $('.business').offset().top
    var news = $('.news').offset().top
    var transactions = $('.transactions').offset().top
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

        if ($(document).scrollTop() > values-480){
          $('.first').removeClass('active')
          $('.second').addClass('active')
          $('.third').removeClass('active')
      };
      if ($(document).scrollTop() > leader-480){
        $('.second').removeClass('active')
        $('.third').addClass('active')
        $('.fourth').removeClass('active')
    };
    if ($(document).scrollTop() > business-480){
      $('.third').removeClass('active')
      $('.fourth').addClass('active');
      $('.fifth').removeClass('active');
    }
  if($(document).scrollTop() > news-520){
    $('.fourth').removeClass('active')
      $('.fifth').addClass('active');
      $('.sixth').removeClass('active')
  }
  if($(document).scrollTop() > transactions-380){
    $('.fifth').removeClass('active')
      $('.sixth').addClass('active')
  }
  if($(document).scrollTop() > contact-380){
    $('.sixth').removeClass('active')
      $('.seventh').addClass('active')
  }
    else{
      $('.seventh').removeClass('active')
    }
    });
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


////accordion


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active-panel");
    });
}


$('.accordion1').click(function(){
  $('.accordion2,.accordion3,.accordion4').removeClass('active-panel')
  $('.panel2,.panel3,.panel4').slideUp()
  $('.panel1').slideToggle(300)
})
$('.accordion2').click(function(){
  $('.accordion1,.accordion3,.accordion4').removeClass('active-panel')
  $('.panel1,.panel3,.panel4').slideUp()
  $('.panel2').slideToggle(300)
})
$('.accordion3').click(function(){
  $('.accordion1,.accordion2,.accordion4').removeClass('active-panel')
  $('.panel1,.panel2,.panel4').slideUp()
  $('.panel3').slideToggle(300)
})
$('.accordion4').click(function(){
  $('.accordion1,.accordion2,.accordion3').removeClass('active-panel')
  $('.panel1,.panel2,.panel3').slideUp()
  $('.panel4').slideToggle(300)
})