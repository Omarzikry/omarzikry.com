
// === change active state place === //
$(".side-section a").on("click", function(){
   $(".side-section").find(".active").removeClass("active");
   $(this).addClass("active");
});


$('.burger-menu').click(function(){
    $('header').toggleClass('open')
})