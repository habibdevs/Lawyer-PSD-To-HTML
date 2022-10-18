$(".readmore-btn").on("click", function () {
  $(this).parent().toggleClass("showContent");
  var replaceText = $(this).parent().hasClass("showContent")
    ? "Read Less"
    : "Read More";
  $(this).text(replaceText);
});
$(".seemore-btn").on("click", function () {
  $(this).parent().toggleClass("showContent");
  var replaceText = $(this).parent().hasClass("showContent")
    ? "Show Less"
    : "Show More";
  $(this).text(replaceText);
});
