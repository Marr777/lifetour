const header = document.querySelector('[data-name="header"]');
const burgerBtn = header.querySelector('[data-name="burger-btn"]');
const logo = header.querySelector('[data-name="header-logo"]');
const nav = header.querySelector('[data-name="header-nav"]');
const body = document.body;

const openMenu = () => {
  header.classList.add('header--open');
  burgerBtn.classList.add('header__burger-btn--open');
  logo.classList.add('header__logo-link--open');
  nav.classList.add('header__nav--open');
  body.classList.add('scroll-lock');
};

const closeMenu = () => {
  header.classList.remove('header--open');
  burgerBtn.classList.remove('header__burger-btn--open');
  logo.classList.remove('header__logo-link--open');
  nav.classList.remove('header__nav--open');
  body.classList.remove('scroll-lock');
};

const onBurgerBtnClick = () => {
  if (header.classList.contains('header--open')) {
    closeMenu();
  } else {
    openMenu();
  }
};

const onOverlayClick = (evt) => {
  if (evt.target === header && evt.target.closest !== 'header__inner') {
    closeMenu();
  }
};

export const initMobileMenu = () => {
  burgerBtn.addEventListener('click', onBurgerBtnClick);
  header.addEventListener('click', onOverlayClick);
};
