$(document).ready(function () {
  $(".navbar li").mouseenter(function () {
    $(this).find("ul").slideToggle("normal");
  });
});
