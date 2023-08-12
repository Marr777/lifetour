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

    wrapperClass: 'swiper__wrapper',
    slideClass: 'swiper__slide',
  });

  const toursSwiper = new Swiper('.tours__swiper', {
    keyboard: true,

    wrapperClass: 'swiper__wrapper',
    slideClass: 'swiper__slide',

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

    wrapperClass: 'swiper__wrapper',
    slideClass: 'swiper__slide',

    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 30,
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

  const feedbackSwiper = new Swiper('.feedback__swiper', {
    keyboard: true,

    wrapperClass: 'swiper__wrapper',
    slideClass: 'swiper__slide',

    spaceBetween: 30,
    slidesPerView: 'auto',

    navigation: {
      nextEl: '.feedback__swiper-btn--next',
      prevEl: '.feedback__swiper-btn--prev',
    },
  });

  const gallerySwiper = new Swiper('.gallery__swiper', {
    keyboard: true,

    wrapperClass: 'swiper__wrapper',
    slideClass: 'swiper__slide',

    breakpoints: {
      768: {
        spaceBetween: 6,
      },
      320: {
        spaceBetween: 3,
      },
    },

    slidesPerView: 'auto',

    navigation: {
      nextEl: '.gallery__swiper-btn--next',
      prevEl: '.gallery__swiper-btn--prev',
    },
  });

  heroSwiper.enable();
  toursSwiper.enable();
  trainingSwiper.enable();
  feedbackSwiper.enable();
  gallerySwiper.enable();
};
