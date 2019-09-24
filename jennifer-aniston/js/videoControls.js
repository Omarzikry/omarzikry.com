$(document).ready(function() {
  console.log($("#playBtn + video")[0]);
  $("#playBtn").click(function() {
    if ($("#playBtn + video")[0].paused == false) {
      $("#playBtn + video")[0].pause();
    } else {
      $("#playBtn + video")[0].play();
      $(this).hide();
    }
    $("#playBtn + video").prop("controls", true);
  });
});
