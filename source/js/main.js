import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initTitles} from './modules/title-shadow/title-shadow';
import {initSwiper} from './modules/swiper/init-swiper';
import {initAudio} from './modules/init-audio/init-audio';
import {initVideo} from './modules/init-video.js/init-video';
import {initMobileMenu} from './modules/mobile-menu/mobile-menu';
import {setStars} from './modules/star-rating/star-rating';
import {initAdvantagesSlider} from './modules/swiper/init-advantages-slider';
import {initHeroMargin} from './modules/hero-margin';
import {setMap} from './modules/map/set-map';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initTitles();
    setStars();
    initMobileMenu();
    initSwiper();
    initVideo();
    initAudio();
    initAdvantagesSlider();
    initHeroMargin();
    setMap();

    const form = new Form();
    if (window.form) {
      window.form = form;
    }
    form.init();
  });
});
