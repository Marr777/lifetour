import {videoBtn, onVideoBtnClick, video} from './video.js';

const mobilePoster = 'img/hero/video-poster-tablet.jpg';
const desktopPoster = 'img/hero/video-poster.jpg';

const breakpoint = window.matchMedia('(max-width:1199px)');

const breakpointChecker = () => {
  if (breakpoint.matches) {
    video.setAttribute('poster', mobilePoster);
  } else {
    video.setAttribute('poster', desktopPoster);
  }
};

export const initVideo = () => {
  videoBtn.addEventListener('click', onVideoBtnClick);
  breakpointChecker();
  window.addEventListener('resize', breakpointChecker);
};
