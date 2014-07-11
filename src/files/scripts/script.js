$(function(){
  
  $(".hex-btn-space").on('click', function(){
    $("#head").slideToggle();
    $("section.body").fadeToggle();
    $("#StageOne").fadeToggle();
    $(this).toggleClass('how-hex');
    $("body").toggleClass('orange-body');
  });
  
});