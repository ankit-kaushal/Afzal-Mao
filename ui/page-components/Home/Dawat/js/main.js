jQuery(document).on('ready', (function ($) {
  /*--------------------------
        SCROLLSPY ACTIVE
    ---------------------------*/
  $('body').scrollspy({
    target: '.bs-example-js-navbar-scrollspy',
    offset: 50,
  });

  /*--------------------------
        STICKY MAINMENU
    ---------------------------*/
  $('#mainmenu-area').sticky({
    topSpacing: 0,
  });

  /*-----------------------------
        SLIDER ACTIVE
    ------------------------------*/
  const mySlider = $('.pogoSlider').pogoSlider({
    pauseOnHover: false,
  }).data('plugin_pogoSlider');

  /*----------------------------
        OPEN SEARCH FORM
    ----------------------------*/
  const $searchForm = $('.search-form');
  const $searchFormTrigger = $('.search-form-trigger');
  const $formOverlay = $('.search-form-overlay');
  $searchFormTrigger.on('click', (event) => {
    event.preventDefault();
    toggleSearch();
  });

  function toggleSearch(type) {
    if (type === 'close') {
      // close serach
      $searchForm.removeClass('is-visible');
      $searchFormTrigger.removeClass('search-is-visible');
    } else {
      // toggle search visibility
      $searchForm.toggleClass('is-visible');
      $searchFormTrigger.toggleClass('search-is-visible');
      if ($searchForm.hasClass('is-visible')) $searchForm.find('input[type="search"]').focus();
      $searchForm.hasClass('is-visible') ? $formOverlay.addClass('is-visible') : $formOverlay.removeClass('is-visible');
    }
  }

  /*------------------------------
        TIME PICKER ACTIVE
    -------------------------------*/
  const input = $('#time').clockpicker({
    placement: 'bottom',
    align: 'left',
    autoclose: true,
    default: 'now',
  });

  /*--------------------------
       HOME PARALLAX BACKGROUND
    ----------------------------*/
  $(window).stellar({
    responsive: true,
    positionProperty: 'position',
    horizontalScrolling: false,
  });

  /*------------------------------
        VIDEO BLOG POPUP
    --------------------------------*/
  $('.blog-video-button').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 320,
    preloader: false,
  });

  /*---------------------------
        SMOOTH SCROLL
    -----------------------------*/
  $('a.scrolltotop, .slider-area h3 a, .navbar-header a, ul#nav a').on('click', function (event) {
    const id = $(this).attr('href');
    const offset = 40;
    const target = $(id).offset().top - offset;
    $('html, body').animate({
      scrollTop: target,
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
  $(window).on('scroll', () => {
    const $totalHeight = $(window).scrollTop();
    const $scrollToTop = $('.scrolltotop');
    if ($totalHeight > 300) {
      $scrollToTop.fadeIn();
    } else {
      $scrollToTop.fadeOut();
    }
    if ($totalHeight + $(window).height() === $(document).height()) {
      $scrollToTop.css('bottom', '90px');
    } else {
      $scrollToTop.css('bottom', '20px');
    }
  });

  /*---------------------------
        MENU LIST MIXITUP FILTERING
    ----------------------------*/
  $('.food-menu-list').mixItUp();

  /*---------------------------
        MENU DISCOUNT SLIDER
    -----------------------------*/
  $('.menu-discount-offer').owlCarousel({
    merge: true,
    video: true,
    items: 1,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 2000,
    margin: 15,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  /*---------------------------
        TEAM SLIDER
    -----------------------------*/
  $('.team-slider').owlCarousel({
    merge: true,
    video: true,
    items: 1,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 2000,
    margin: 15,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },

    },
  });

  /*---------------------------
        BLOG POST SLIDER
    -----------------------------*/
  $('.post-slider').owlCarousel({
    merge: true,
    video: true,
    items: 1,
    smartSpeed: 2000,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 15,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  /*---------------------------
        BLOG POST IMAGE SLIDER
    -----------------------------*/
  $('.blog-image-sldie').owlCarousel({
    merge: true,
    video: true,
    items: 1,
    smartSpeed: 1000,
    loop: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 2000,
    margin: 15,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  /*---------------------------
        BMENU SLIDER
    -----------------------------*/
  $('.food-menu-list.food-menu-slider').owlCarousel({
    smartSpeed: 1000,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  /*----------------------------
        INSTAGRAM FEED ACTIVE
    -----------------------------*/
  const feed = new Instafeed({
    get: 'user',
    userId: 3287251940,
    accessToken: '3287251940.1677ed0.30ef31a6f72044cda001db3bfd0d8308',
    target: 'instagram',
    limit: 10, // max 60 images..
    resolution: 'standard_resolution',
    after() {
      const el = document.getElementById('instagram');
      if (el.classList) el.classList.add('show');
      else el.className += ' ' + 'show';
    },
  });
  feed.run();

  /*--------------------------
        ACTIVE WOW JS
    ----------------------------*/
  new WOW().init();
}(jQuery)));

jQuery(window).on('load', () => {
  /*--------------------------
        PRE LOADER
    ----------------------------*/
  $('.preeloader').fadeOut(1000);
});

$(document).ready(() => {
  $('select').on('change', function () {
    $(this).find('option:selected').each(function () {
      const geeks = $(this).attr('value');
      if (geeks) {
        $('.select').not(`.${geeks}`).hide();
        $(`.${geeks}`).show();
      } else {
        $('.select').hide();
      }
    });
  }).change();
});

const video = document.getElementById('video');
const circlePlayButton = document.getElementById('circle-play-b');

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

circlePlayButton.addEventListener('click', togglePlay);
video.addEventListener('playing', () => {
  circlePlayButton.style.opacity = 0;
});
video.addEventListener('pause', () => {
  circlePlayButton.style.opacity = 1;
});
