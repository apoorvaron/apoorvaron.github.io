$(".loadingbar").delay(1500).animate({ left: "0" }, 3000);
$(".loadingBox").delay(500).animate({ opacity: "1" }, 1000);
// $(".splashScreen").delay(4500).animate({ top: "-100%" }, 1500);
$(".loadingCircle").delay(4500).animate({ opacity: "0" }, 500);
$("body")
  .delay(5000)
  .queue(function () {
    // window.location.replace("https://apoorvaron.me");
    // window.location = "./me.html";
    // $(".chupahuahai").css("display", "inline-block");
  });
$(".count--splash").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 5000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});
