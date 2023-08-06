const starContainers = document.querySelectorAll('[data-name="star-rating"]');
const starTemplate = document.querySelector('#star-rating').content;
const fragment = document.createDocumentFragment();

const StarValues = {
  2: 'two',
  3: 'three',
};

export const setStars = () => {
  if (starContainers) {
    starContainers.forEach((item) => {
      const stars = starTemplate.cloneNode(true);
      fragment.append(stars);
      item.append(fragment);
      const starValue = Number(item.dataset.stars);
      item.classList.add(`star-rating--${StarValues[starValue]}`);
      item.setAttribute('aria-label', `${starValue} звезды.`);
    });
  }
};
