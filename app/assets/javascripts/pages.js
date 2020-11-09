$(document).ready(function () {
    $(".close").click(function () {
      $(".alert").fadeOut(2000);
    });
  });
  
  $(document).ready(function () {
    $("#collapse").click(function (event) {
      $(".collapse").slideToggle();
      event.preventDefault();
    });
  });
  
  $(document).ready(function () {
    $(".btn-link").click(function (event) {
      $("#collapseOne").slideToggle();
      event.preventDefault();
    });
  });
  
