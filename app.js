$(".orange-btn").click(function () {
    $(".alert").removeClass("hide");
    $(".alert").addClass("show");
    setTimeout(function () {
    $(".alert").addClass("hide");
    $(".alert").removeClass("show");
  }, 10000);
  });
  
  $(".btn").click(function () {
    $(".alert").addClass("hide");
    $(".alert").removeClass("show");
  });

  // blue Alert
   $('.blue-btn').click(function(){
    $('.blueAlert').removeClass('hide')
    $('.blueAlert').addClass('show')
   })
   $(".btn-blue").click(function () {
    $(".blueAlert").addClass("hide");
    $(".blueAlert").removeClass("show");
  });