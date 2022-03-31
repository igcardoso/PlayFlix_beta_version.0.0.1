$(document).ready(() => {
  $('#hamburger-menu').click(() => {
    $('#hamburger-menu').toggleClass('active')
    $('#nav-menu').toggleClass('active')
  });
  

  // setting owl carousel

  let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

  $('#hero-carousel').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: navText,
    autoplay: false,
    autoplayHoverPause: false
  });

  $('#top-movies-slide').owlCarousel({
    items: 2,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      500: {
        items: 3
      },
      1000: {
        items: 4
      },
      1280: {
        items: 6
      },
      1600: {
        items: 6
      }
    }
  });

  $('.movies-slide').owlCarousel({
    items: 2,
    dots: false,
    nav: true,
    loop: false,
    center: true,
    navText: navText,
    margin: 15,
    focusOnSelect: true,
    responsive: {
      500: {
        items: 3
      },
      1000: {
        items: 4
      },
      1280: {
        items: 6
      },
      1600: {
        items: 6
      }
    }
  });
});
