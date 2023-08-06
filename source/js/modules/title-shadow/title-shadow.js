const titles = document.querySelectorAll('[data-name="title"]');

export const initTitles = () => {
  titles.forEach((title) => {
    title.dataset.content = title.textContent;
  });
};
