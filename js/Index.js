$(document).ready(() => {
  $('').click(() => {
    $('').toggleClass('active')
    $('').toggleClass('active')
  });
  
  
  
  // setting owl carousel

  let navText = ["<img width='43rem' src='images/icons transparent/bx-chevron-left.ico' />", "<img width='43rem' src='images/icons transparent/bx-chevron-right.ico' />"
    ]

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
        items: 5
      },
      1600: {
        items: 6
      }
    }
  });

  $('.movies-slide').owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: false,
    center: false,
    navText: navText,
    margin: 2,
    focusOnSelect: true,
    responsive: {
      500: {
        items: 3
      },
      1000: {
        items: 5
      },
      1280: {
        items: 5
      },
      1600: {
        items: 6
      }
    }
  });
});

// BUTTON SEARCH

$(document).ready(function() {
  $('.button-menu-search').click(function() {
    
    // BACKGROUND
    
    $('.background-fund').css({
      display: 'none'
    });
    
    // PAGES THE SITE
    
    $('#search').css({
      display: 'block'
    });
    $('#home').css({
      display: 'none'
    });
    $('#calender').css({
      display: 'none'
    });
    $('#television').css({
      display: 'none'
    });
    $('#film').css({
      display: 'none'
    });
    $('#plus').css({
      display: 'none'
    });
    
     // BUTTONS MENU LATERAL
    
    $('.search button').css({
      borderBottom: '2px solid #ff0000'
    });
    $('.home button').css({
      borderBottom: 'none'
    });
    $('.calender button').css({
      borderBottom: 'none'
    });
    $('.television button').css({
      borderBottom: 'none'
    });
    $('.film button').css({
      borderBottom: 'none'
    });
    $('.plus button').css({
      borderBottom: 'none'
    });
    
  });
});

// BUTTON HOME

$(document).ready(function() {
  $('.button-menu-home').click(function() {
    
    // BACKGROUND
    
    $('.background-fund').css({
      display: 'block'
    });
    
    // PAGES THE SITE
    
    $('#search').css({
      display: 'none'
    });
    $('#home').css({
      display: 'block'
    });
    $('#calender').css({
      display: 'none'
    });
    $('#television').css({
      display: 'none'
    });
    $('#film').css({
      display: 'none'
    });
    $('#plus').css({
      display: 'none'
    });
    
    // BUTTONS MENU LATERAL
    
    $('.search button').css({
      borderBottom: 'none'
    });
    $('.home button').css({
      borderBottom: '2px solid #ff0000'
    });
    $('.calender button').css({
      borderBottom: 'none'
    });
    $('.television button').css({
      borderBottom: 'none'
    });
    $('.film button').css({
      borderBottom: 'none'
    });
    $('.plus button').css({
      borderBottom: 'none'
    });
    
    // BUTTONS NAV BOTTOM
    
    $('.home-bottom').css({
      opacity: '1'
    });
    $('.calender-bottom').css({
      opacity: '0.7'
    });
    $('.television-bottom').css({
      opacity: '0.7'
    });
    $('.film-bottom').css({
      opacity: '0.7'
    });
    $('.plus-bottom').css({
      opacity: '0.7'
    });

    
  });
});

// BUTTON CALENDER

$(document).ready(function() {
  $('.button-menu-calender').click(function() {
    
    // BACKGROUND
    
    $('.background-fund').css({
      display: 'none'
    });
    
    
    // PAGES THE SITE
    
    $('#search').css({
      display: 'none'
    });
    $('#home').css({
      display: 'none'
    });
    $('#calender').css({
      display: 'block'
    });
    $('#television').css({
      display: 'none'
    });
    $('#film').css({
      display: 'none'
    });
    $('#plus').css({
      display: 'none'
    });
    
    // BUTTONS MENU LATERAL
    
    $('.search button').css({
      borderBottom: 'none'
    });
    $('.home button').css({
      borderBottom: 'none'
    });
    $('.calender button').css({
      borderBottom: '2px solid #ff0000'
    });
    $('.television button').css({
      borderBottom: 'none'
    });
    $('.film button').css({
      borderBottom: 'none'
    });
    $('.plus button').css({
      borderBottom: 'none'
    });
    
    // BUTTONS NAV BOTTOM
    
    $('.home-bottom').css({
      opacity: '0.7'
    });
    $('.calender-bottom').css({
      opacity: '1'
    });
    $('.television-bottom').css({
      opacity: '0.7'
    });
    $('.film-bottom').css({
      opacity: '0.7'
    });
    $('.plus-bottom').css({
      opacity: '0.7'
    });

    
  });
});

// BUTTON TELEVISION

$(document).ready(function() {
  $('.button-menu-television').click(function() {
    
    // BACKGROUND
    
    $('.background-fund').css({
      display: 'none'
    });
    
    // PAGES THE SITE
    
    $('#search').css({
      display: 'none'
    });
    $('#home').css({
      display: 'none'
    });
    $('#calender').css({
      display: 'none'
    });
    $('#television').css({
      display: 'block'
    });
    $('#film').css({
      display: 'none'
    });
    $('#plus').css({
      display: 'none'
    });
    
    // BUTTONS MENU LATERAL
    
    $('.search button').css({
      borderBottom: 'none'
    });
    $('.home button').css({
      borderBottom: 'none'
    });
    $('.calender button').css({
      borderBottom: 'none'
    });
    $('.television button').css({
      borderBottom: '2px solid #ff0000'
    });
    $('.film button').css({
      borderBottom: 'none'
    });
    $('.plus button').css({
      borderBottom: 'none'
    });
    
    // BUTTONS NAV BOTTOM
    
    $('.home-bottom').css({
      opacity: '0.7'
    });
    $('.calender-bottom').css({
      opacity: '0.7'
    });
    $('.television-bottom').css({
      opacity: '1'
    });
    $('.film-bottom').css({
      opacity: '0.7'
    });
    $('.plus-bottom').css({
      opacity: '0.7'
    });

    
  });
});

// BUTTON FILM

$(document).ready(function() {
  $('.button-menu-film').click(function() {
    
    // BACKGROUND
    
    $('.background-fund').css({
      display: 'none'
    });
    
    // PAGES THE SITE
    
    $('#search').css({
      display: 'none'
    });
    $('#home').css({
      display: 'none'
    });
    $('#calender').css({
      display: 'none'
    });
    $('#television').css({
      display: 'none'
    });
    $('#film').css({
      display: 'block'
    });
    $('#plus').css({
      display: 'none'
    });
    
    // BUTTONS MENU LATERAL
    
    $('.search button').css({
      borderBottom: 'none'
    });
    $('.home button').css({
      borderBottom: 'none'
    });
    $('.calender button').css({
      borderBottom: 'none'
    });
    $('.television button').css({
      borderBottom: 'none'
    });
    $('.film button').css({
      borderBottom: '2px solid #ff0000'
    });
    $('.plus button').css({
      borderBottom: 'none'
    });
    
    // BUTTONS NAV BOTTOM
    
    $('.home-bottom').css({
      opacity: '0.7'
    });
    $('.calender-bottom').css({
      opacity: '0.7'
    });
    $('.television-bottom').css({
      opacity: '0.7'
    });
    $('.film-bottom').css({
      opacity: '1'
    });
    $('.plus-bottom').css({
      opacity: '0.7'
    });

    
  });
});

// BUTTON PLUS

$(document).ready(function() {
  $('.button-menu-plus').click(function() {
    
    // BACKGROUND
    
    $('.background-fund').css({
      display: 'none'
    });
    
    // PAGES THE SITE
    
    $('#search').css({
      display: 'none'
    });
    $('#home').css({
      display: 'none'
    });
    $('#calender').css({
      display: 'none'
    });
    $('#television').css({
      display: 'none'
    });
    $('#film').css({
      display: 'none'
    });
    $('#plus').css({
      display: 'block'
    });
    
    // BUTTONS MENU LATERAL
    
    $('.search button').css({
      borderBottom: 'none'
    });
    $('.home button').css({
      borderBottom: 'none'
    });
    $('.calender button').css({
      borderBottom: 'none'
    });
    $('.television button').css({
      borderBottom: 'none'
    });
    $('.film button').css({
      borderBottom: 'none'
    });
    $('.plus button').css({
      borderBottom: '2px solid #ff0000'
    });
    
    // BUTTONS NAV BOTTOM
    
    $('.home-bottom').css({
      opacity: '0.7'
    });
    $('.calender-bottom').css({
      opacity: '0.7'
    });
    $('.television-bottom').css({
      opacity: '0.7'
    });
    $('.film-bottom').css({
      opacity: '0.7'
    });
    $('.plus-bottom').css({
      opacity: '1'
    });

    
  });
});

// MENU LATERAL

// ACTIONS THE BUTTONS TO PAGE HOME

$(document).ready(function() {
  $('#movie01').hover(function() {
    $('.hero-slide-item1').css({
      background: 'url(images/movies/theatre-dead.jpg), no-repeat center', backgroundSize: 'cover'
    });
    $('.item-content-title1').text('Theatre of the Dead');
    $('.star1 span').text('6.1');
    $('.time1 span').text('2h 29m');
    $('.class1 span').text('16+');
    $('.class1').css({
      backgroundColor: '#ff0000', border: '2px solid #ff0000'
      
    });
    $('.item-content-description1').text('Optimus Prime encontra seu planeta natal, Cybertron, agora um planeta morto, e descobre que foi responsável por matá-lo. Ele encontra uma maneira de trazer o planeta de volta à vida, mas para isso precisa encontrar um artefato que está na Terra.');
    $('.item-action1').css({
      display: 'none'
    });

  });
  $('#movie02').hover(function() {
    $('.hero-slide-item1').css({
      background: 'url(https://www.themoviedb.org/t/p/original/8yLzd8z7xRQzWG0neDrVLc34Jmx.jpg), no-repeat center', backgroundSize: 'cover'
    });
    $('.item-content-title1').text('Transformes');
    $('.star1 span').text('6.1');
    $('.time1 span').text('2h 29m');
    $('.class1 span').text('12+');
    $('.class1').css({
      backgroundColor: '#ff9202', border: '2px solid #ff9202'
      
    });
    $('.item-content-description1').text('Optimus Prime encontra seu planeta natal, Cybertron, agora um planeta morto, e descobre que foi responsável por matá-lo. Ele encontra uma maneira de trazer o planeta de volta à vida, mas para isso precisa encontrar um artefato que está na Terra.');
    $('.item-action1').css({
      display: 'none'
    });

  });
  $('#movie03').hover(function() {
    $('.hero-slide-item1').css({
      background: 'url(images/movies/resident-evil.jpg), no-repeat center', backgroundSize: 'cover'
    });
    $('.item-content-title1').text('Resident Evil');
    $('.star1 span').text('6.1');
    $('.time1 span').text('2h 29m');
    $('.class1 span').text('12+');
    $('.class1').css({
      backgroundColor: '#ff9202', border: '2px solid #ff9202'
      
    });
    $('.item-content-description1').text('Optimus Prime encontra seu planeta natal, Cybertron, agora um planeta morto, e descobre que foi responsável por matá-lo. Ele encontra uma maneira de trazer o planeta de volta à vida, mas para isso precisa encontrar um artefato que está na Terra.');
    $('.item-action1').css({
      display: 'none'
    });

  });
  $('#movie04').hover(function() {
    $('.hero-slide-item1').css({
      background: 'url(images/movies/captain-marvel.png), no-repeat center', backgroundSize: 'cover'
    });
    $('.item-content-title1').text('Captan Marvel');
    $('.star1 span').text('6.1');
    $('.time1 span').text('2h 29m');
    $('.class1 span').text('12+');
    $('.class1').css({
      backgroundColor: '#ff9202', border: '2px solid #ff9202'
      
    });
    $('.item-content-description1').text('Optimus Prime encontra seu planeta natal, Cybertron, agora um planeta morto, e descobre que foi responsável por matá-lo. Ele encontra uma maneira de trazer o planeta de volta à vida, mas para isso precisa encontrar um artefato que está na Terra.');
    $('.item-action1').css({
      display: 'none'
    });

  });
  $('#movie05').hover(function() {
    $('.hero-slide-item1').css({
      background: 'url(images/movies/hunter-killer.jpg), no-repeat center', backgroundSize: 'cover'
    });
    $('.item-content-title1').text('Hunter Killer');
    $('.star1 span').text('6.1');
    $('.time1 span').text('2h 29m');
    $('.class1 span').text('12+');
    $('.class1').css({
      backgroundColor: '#ff9202', border: '2px solid #ff9202'
      
    });
    $('.item-content-description1').text('Optimus Prime encontra seu planeta natal, Cybertron, agora um planeta morto, e descobre que foi responsável por matá-lo. Ele encontra uma maneira de trazer o planeta de volta à vida, mas para isso precisa encontrar um artefato que está na Terra.');
    $('.item-action1').css({
      display: 'none'
    });

  });
  $('#movie06').hover(function() {
    $('.hero-slide-item1').css({
      background: 'url(images/movies/blood-shot.jpg), no-repeat center', backgroundSize: 'cover'
    });
    $('.item-content-title1').text('Bloodshot');
    $('.star1 span').text('6.1');
    $('.time1 span').text('2h 29m');
    $('.class1 span').text('12+');
    $('.class1').css({
      backgroundColor: '#ff9202', border: '2px solid #ff9202'
      
    });
    $('.item-content-description1').text('Optimus Prime encontra seu planeta natal, Cybertron, agora um planeta morto, e descobre que foi responsável por matá-lo. Ele encontra uma maneira de trazer o planeta de volta à vida, mas para isso precisa encontrar um artefato que está na Terra.');
    $('.item-action1').css({
      display: 'none'
    });

  });
  $('#movie07').hover(function() {
    $('.hero-slide-item1').css({
      background: 'url(images/movies/call.jpg), no-repeat center', backgroundSize: 'cover'
    });
    $('.item-content-title1').text('Call');
    $('.star1 span').text('6.1');
    $('.time1 span').text('2h 29m');
    $('.class1 span').text('12+');
    $('.class1').css({
      backgroundColor: '#ff9202', border: '2px solid #ff9202'
      
    });
    $('.item-content-description1').text('Optimus Prime encontra seu planeta natal, Cybertron, agora um planeta morto, e descobre que foi responsável por matá-lo. Ele encontra uma maneira de trazer o planeta de volta à vida, mas para isso precisa encontrar um artefato que está na Terra.');
    $('.item-action1').css({
      display: 'none'
    });

  });
});