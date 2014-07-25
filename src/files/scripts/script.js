$(function(){
  $("#stage").toggle();
  $(".hex-btn-space").on('click', function(){
    $("#head").slideToggle();
    $("section.body").fadeToggle();
    $("#stage").toggle();
    $(this).toggleClass('how-hex');
    $("body").toggleClass('orange-body');
  });
  
});