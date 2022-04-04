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


// //Закрываем окно и слой затемнения
// $(document).on('click', 'a.close, #fade', function () { //закрытие по клику вне окна и кнопке закрытия...
//   $('#fade , .popup_block').fadeOut(function () {
//     $('#fade, a.close').remove(); //При нажатии закрывается окно и видео останавливается
//     document.location.reload();
//   });
//   return false;
// });
// });