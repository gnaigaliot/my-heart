$(function() {
  // ready document
  $(".classic-1").hide();
  $(".classic-2").hide();
  $(".dots-8").hide();
  let isAvailable = false;

  $(".heart").on("click", function() {
    if (isAvailable) {
      return
    } else {
      isAvailable = true;
    }
    
    $(this).toggleClass("is-active");
    $(".film").hide();
    $(".classic-1").show();
    
    setTimeout(function() {
      $(".classic-1").hide();
      $(".dots-8").show();
      
      setTimeout(function() {
        $(".dots-8").hide();
        $(".classic-2").show();
      }, 5000);
    }, 5000);
  });
});