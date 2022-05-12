
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 8);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}

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
    items: 3,
    dots: false,
    loop: true,
    autoplay: true,
    margin: 2,
    autoplayHoverPause: true,
    responsive: {
      500: {
        items: 4
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
    items: 3,
    dots: false,
    nav: true,
    loop: false,
    center: false,
    navText: navText,
    margin: 2,
    focusOnSelect: true,
    responsive: {
      500: {
        items: 4
      },
      1000: {
        items: 5
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

  var tt9032400 = "<iframe class='iframe" + "' src='https://drive.google.com/file/d/1Nd5RCvAsusk0reXWyDWNCqF1i4rSOy7I" + "/preview' allow='autoplay" + "'>";

// BUTTON PLAY FILMS AND SERIES


$(document).ready(function() {
  $('.bx-button-play').click(function() {
    
    // BUTTON PLAY
    
    window.alert('Posicione o dispositivo em orientação paisagem(Deitado)')
    
    $('.iframe').css({
      display: 'block'
    });
    
    $('.button-back-iframe').css({
      display: 'block',
      zIndex: '20000'
    });
    
    $('.button-lock-screen-page-movie').css({
      display: 'inline-block'
    });
    
    $('.section-info-film').css({
      display: 'none'
    });
  
    
  });
});

// BUTTON PLAY FILMS AND SERIES

// BUTTON BACK FILMS AND SERIES


$(document).ready(function() {
  $('.button-back-page').click(function() {
    
    // BUTTON BACK
    
    $('#page-film').css({
      display: 'none'
    });
    
    $('#menu-left').css({
      opacity: '1',
      zIndex: '200'
    });
    
    $('#nav-bottom').css({
      opacity: '1',
      zIndex: '2000'
    });
    
    $('.nav-wrapper').css({
      opacity: '1',
      zIndex: '99'
    });
    
    $('.logo').css({
      opacity: '1',
      zIndex: '99'
    });
    
    $('.hamburger-menu').css({
      opacity: '1',
      zIndex: '99'
    });
    
    $('.background-fund').css({
      opacity: '1'
    });
    
    $('#home').css({
      display: 'block'
    });
  
    
  });
});

// BUTTON BACK FILMS AND SERIES

// BUTTON BACK IFRAME PAGE FILMS AND SERIES

$(document).ready(function() {
  $('.button-back-iframe').click(function() {
    
    // BUTTON BACK
    
    $('.section-info-film').css({
      display: 'block'
    });
    
    $('.button-back-iframe').css({
      display: 'none'
    });
    
    $('.button-lock-screen-page-movie').css({
      display: 'none'
    });
    
    $('.iframe').css({
      display: 'none'
    });
    
  });
  
  $('.button-back-iframe').hover(function() {
    
  });
  
  $('.iframe').hover(function() {
 
  });
  
});

// HOVER BACK IFRAME

// BUTTON BACK IFRAME PAGE FILMS AND SERIES

// BUTTON BACK IFRAME PAGE FILMS AND SERIES

$(document).ready(function() {
  $('.button-on-lock-screen-iframe').click(function() {
    
    // HOVER BUTTON LOCK SCREEN
    
  /*  $('.image-button-lock-screen-iframe').attr('src', 'images/icons transparent/' + 'on-lock-screen.ico');
  */    
    $('.gradient-lock-screen-movie-top').css({
      display: 'block'
    });
    
    $('.gradient-lock-screen-movie-bottom').css({
      display: 'block'
    });
    
    $('.button-back-iframe').css({
      opacity: '0',
      zIndex: '-20000'
    });
    
    $('.button-off-lock-screen-iframe').css({
      left: '8.2%',
      borderTopRightRadius: '8em',
      borderBottomRightRadius: '8em',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
      paddingLeft: '4%',
      paddingRight: '1.2%'
    });
    
    $('.button-on-lock-screen-iframe').css({
      left: '-2.9%',
      
    });
    
  });
  
  $('.button-off-lock-screen-iframe').click(function() {
    
    // HOVER BUTTON LOCK SCREEN
    
  /*  $('.image-button-lock-screen-iframe').attr('src', 'images/icons transparent/' + 'off-lock-screen.ico');
  */
    $('.gradient-lock-screen-movie-top').css({
      display: 'none'
    });
    
    $('.gradient-lock-screen-movie-bottom').css({
      display: 'none'
    });
    
    $('.button-back-iframe').css({
      opacity: '1',
      zIndex: '2000'
    });
    
    $('.button-off-lock-screen-iframe').css({
      left: '45%',
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0',
      borderTopLeftRadius: '8em',
      borderBottomLeftRadius: '8em',
      paddingLeft: '1.2%',
      paddingRight: '3.2%'
    });
    
    $('.button-on-lock-screen-iframe').css({
      left: '44%'
    });
    
  });
});

// HOVER BACK IFRAME

// BUTTON BACK IFRAME PAGE FILMS AND SERIES

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
    $('#page-film').css({
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
    $('#page-film').css({
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
    $('#page-film').css({
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
    $('#page-film').css({
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
    $('#page-film').css({
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

// 

// FILMS

$(document).ready(function() {
  // FILME tt9032400
  $('#tt9032400').click(function() {
    
    // BUTTON BACK
    
    $('#page-film').css({
      display: 'block'
    });
    
    $('.section-info-film').css({
      background: 'url(https://www.themoviedb.org/t/p/original/3dUByTea97X3XzznN8ZPFX9c7J7.jpg), no-repeat center', backgroundSize: 'cover'
      
    });
    
    $('#page-film .movie-homepage-title').text('Eternos');
    
    $('#page-film .type').text('Ficção científica');
    
    $('#page-film .relevanse').text('71% Relevante');
    
    $('#page-film .date').text('2021');
    
    $('#page-film .seasons-on-minutes').text('2h 37m');
    
    $('#page-film .quality').text('HD');
    
    $('#page-film .name-the-direction').text('HD');
    
    $('#page-film .name-the-elenco').text('Gemma Chan, Richard Madden, Angelina Jolie, Barry Keoghan ...');
    
    $('#page-film .date-the-atualization').text('4 dias e 7 horas');
    
    $('#page-film .synopsis-of-the-film').text('Após os eventos de "Vingadores: Ultimato", os Eternos, uma raça alienígena imortal criada pelos Celestiais que vivem em segredo na Terra há mais de 7000 anos, se reúnem após uma tragédia inesperada para proteger a humanidade de seus colegas malignos: os Deviantes.');
    
    $('.player').append(tt9032400);
    
    $('#menu-left').css({
      opacity: '0',
      zIndex: '-2000000'
    });
    
    $('.button-back-iframe').css({
      display: 'none'
    });
    
    $('#nav-bottom').css({
      opacity: '0',
      zIndex: '-200000'
    });
    
    $('.nav-wrapper').css({
      opacity: '0',
      zIndex: '-2000000'
    });
    
    $('.logo').css({
      opacity: '0',
      zIndex: '-2000000'
    });
    
    $('.hamburger-menu').css({
      opacity: '0',
      zIndex: '-90000'
    });
    
    $('.background-fund').css({
      opacity: '0'
    });
    
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
      display: 'none'
    });
  
    
  });
  $('#tt9032400').hover(function() {
    $('.hero-slide-item1').css({
      background: 'url(https://www.themoviedb.org/t/p/original/3dUByTea97X3XzznN8ZPFX9c7J7.jpg), no-repeat center', backgroundSize: 'cover'
    });
    $('.item-content-title1').text('Eternos');
    $('.star1 span').text('71% Relevante');
    $('.time1 span').text('2h 37m');
    $('.class1 span').text('12+');
    $('.class1').css({
      backgroundColor: '#ffa400', border: '2px solid #ffa400'
      
    });
    $('.item-content-description1').text('Após os eventos de "Vingadores: Ultimato", os Eternos, uma raça alienígena imortal criada pelos Celestiais que vivem em segredo na Terra há mais de 7000 anos, se reúnem após uma tragédia inesperada para proteger a humanidade de seus colegas malignos: os Deviantes.');
    $('.item-action1').css({
      display: 'none'
    });

  });
  // FILME tt9032400
});

// FILMS