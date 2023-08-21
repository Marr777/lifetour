const header = document.querySelector('[data-name="header"]');
const burgerBtn = header.querySelector('[data-name="burger-btn"]');
const logo = header.querySelector('[data-name="header-logo"]');
const nav = header.querySelector('[data-name="header-nav"]');
const navLinks = header.querySelectorAll('[data-name="header-link"]');
const hero = document.querySelector('.hero');
const headerWrapper = document.querySelector('.header__wrapper');
const headerInner = document.querySelector('.header__inner');
const body = document.body;

const checkHeaderHeight = () => {
  if (headerInner.offsetHeight >= window.innerHeight) {
    headerWrapper.style.overflow = 'scroll';
  } else {
    headerWrapper.style.overflow = '';
  }
};

const onHeaderOverflow = () => {
  checkHeaderHeight();

  const target = new MutationObserver(checkHeaderHeight);
  target.observe(headerWrapper, {
    childList: true,
    subtree: true,
  });
};

const openMenu = () => {
  header.classList.add('header--open');
  hero.style.marginTop = '1px';
  burgerBtn.classList.add('header__burger-btn--open');
  logo.classList.add('header__logo-link--open');
  nav.classList.add('header__nav--open');
  navLinks.forEach((link) => link.classList.add('header__nav-link--open'));
  body.classList.add('scroll-lock');
  onHeaderOverflow();
  window.addEventListener('resize', onHeaderOverflow);
};

const closeMenu = () => {
  header.classList.remove('header--open');
  burgerBtn.classList.remove('header__burger-btn--open');
  logo.classList.remove('header__logo-link--open');
  nav.classList.remove('header__nav--open');
  navLinks.forEach((link) => link.classList.remove('header__nav-link--open'));
  body.classList.remove('scroll-lock');
  hero.style.marginTop = `-${header.offsetHeight}px`;
  window.removeEventListener('resize', onHeaderOverflow);
};

const onBurgerBtnClick = () => {
  if (header.classList.contains('header--open')) {
    closeMenu();
  } else {
    openMenu();
  }
};

const onOverlayClick = (evt) => {
  if (!evt.target.closest('.header__inner') || evt.target.matches('.header__nav-link')) {
    closeMenu();
  }
};

export const initMobileMenu = () => {
  burgerBtn.addEventListener('click', onBurgerBtnClick);
  header.addEventListener('click', onOverlayClick);
};
