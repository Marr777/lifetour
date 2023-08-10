import Swiper from '../../vendor/swiper.js';

const tabletBreakpoint = window.matchMedia('(max-width:1199px)');
let advantagesSwiper;

const setAdvantagesSlider = () => {
  advantagesSwiper = new Swiper('.advantages__swiper', {
    keyboard: true,

    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',
    loop: true,

    breakpoints: {
      1200: {
        spaceBetween: 30,
        initialSlide: 2,
        centeredSlides: true,
        slidesPerView: 3.6,
      },
    },

    navigation: {
      nextEl: '.advantages__swiper-btn--next',
      prevEl: '.advantages__swiper-btn--prev',
    },
  });
};


const breakpointSlider = () => {
  if (tabletBreakpoint.matches && advantagesSwiper) {
    advantagesSwiper.destroy();
    advantagesSwiper = '';
  } else if (!advantagesSwiper.initialized) {
    initAdvantagesSlider();
  }
};

export const initAdvantagesSlider = () => {
  setAdvantagesSlider();
  breakpointSlider();
  window.addEventListener('resize', breakpointSlider);
};
