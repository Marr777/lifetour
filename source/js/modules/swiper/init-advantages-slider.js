import Swiper from '../../vendor/swiper.js';

const tabletBreakpoint = window.matchMedia('(max-width:1199px)');
let advantagesSwiper;

const setAdvantagesSlider = () => {
  advantagesSwiper = new Swiper('.advantages__swiper', {
    keyboard: true,

    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',

    breakpoints: {
      1200: {
        spaceBetween: 30,
        initialSlide: 1,
        slidesPerView: 3,
        slidesOffsetBefore: 200,
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
  } else if (!advantagesSwiper.initialized) {
    initAdvantagesSlider();
  }
};

export const initAdvantagesSlider = () => {
  if (!tabletBreakpoint.matches) {
    setAdvantagesSlider();
  }
  breakpointSlider();
  window.addEventListener('resize', breakpointSlider);
};
