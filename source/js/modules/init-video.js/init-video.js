import {videoBtn, onVideoBtnClick} from './video.js';

// const mobilePoster = 'img/gym/video-poster-mobile.jpg';
// const desktopPoster = 'img/gym/video-poster-desktop.jpg';

// const breakpoint = window.matchMedia('(max-width:768px)');

// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//     video.setAttribute('poster', mobilePoster);
//   } else {
//     video.setAttribute('poster', desktopPoster);
//   }
// };

export const initVideo = () => {
  videoBtn.addEventListener('click', onVideoBtnClick);
  // breakpointChecker();
  // window.addEventListener('resize', breakpointChecker);
};
