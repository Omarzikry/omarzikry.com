$(document).ready(function () {
  const featuredImagesText = $(".parallax-text");
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    featuredImagesText.css(
      "transform",
      `translate3d(-${scroll / 7}px,0,0) scaleY(2)`
    );
    // featuredImagesText.style.transform = `translate3d(-${scroll /
    //   7}px,0,0) scaleY(2)`;
  });
  var rellax = new Rellax(".rellax");
});