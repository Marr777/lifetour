import Swiper from '../../vendor/swiper.js';

export const initSwiper = () => {
  const heroSwiper = new Swiper('.hero__swiper', {
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      bulletClass: 'hero__pagination-bullet',
      bulletActiveClass: 'hero__pagination-bullet--active',
      clickable: true,
    },
    keyboard: true,
    effect: 'fade',

    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',
  });

  const toursSwiper = new Swiper('.tours__swiper', {
    keyboard: true,

    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',

    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      320: {
        slidesPerView: 1,
      },
    },

    navigation: {
      nextEl: '.tours__swiper-btn--next',
      prevEl: '.tours__swiper-btn--prev',
    },
  });

  const trainingSwiper = new Swiper('.training__swiper', {
    keyboard: true,

    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',

    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      320: {
        slidesPerView: 1,
      },
    },

    navigation: {
      nextEl: '.training__swiper-btn--next',
      prevEl: '.training__swiper-btn--prev',
    },
  });

  heroSwiper.enable();
  toursSwiper.enable();
  trainingSwiper.enable();
};
