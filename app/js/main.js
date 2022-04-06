$(function () {
  $(window).on('load', function () {
    $('.top-slider__list').slick({
      dots: true,
      arrows: false,
      fade: true,
      // autoplay: true,
      // autoplaySpeed: 3000
    });

  });

  $(window).on('load', function () {
    $('.partners__list').slick({
      dots: false,
      arrows: false,
      slidesToShow: 5.5,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 3000
    });
  });

  $(".rateyo").rateYo({
    starWidth: "16px",
    "rating": 2.2,
    spacing: "2px",
    ratedFill: "#ffb534",
    normalFill: "#8d8d8d"
  }

  );

  $(".trending-fashion__images-btn").on('click', function () {
    $('.video').addClass('video--active');

  });

  $(".video").on('click', function () {
    $('.video').removeClass('video--active');

  });

  $(".tab").on("click", function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("tab--active");

    $($(this).closest('.tabs-wrapper')).siblings().find("div").removeClass("tabs-content--active");


    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");
    $('.product-slider').slick('setPosition');

  });

});

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 3 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);




