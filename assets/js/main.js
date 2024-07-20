$(document).ready(function () {
  // Event listener for the menu icon
  $('#menuIcon').on('click', function () {
    var header = document.querySelector('.header');
    header.classList.toggle('responsive');
  });

  /*Image slider */
  $("#bs-items").slick({
    dots: false,
    infinite: false,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

/*sticky header*/
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $(".header").addClass("sticky-header");
  } else {
    $(".header").removeClass("sticky-header");
  }
});

