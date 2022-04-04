$(function () {

  $('.top-slider__list').slick({
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
    // autoplaySpeed: 3000

  });

  $(".rateyo").rateYo({
    starWidth: "16px",
    "rating": 2.2,
    spacing: "2px",
    ratedFill: "#ffb534",
    normalFill: "#8d8d8d"
  }

  );


});