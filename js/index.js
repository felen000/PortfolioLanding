let burgerBtn = document.querySelector(`.burger-btn`);
let burgerMenu = document.querySelector(`.burger-menu`);
let body = document.querySelector(`body`);

burgerBtn.addEventListener(`click`, () => {
  burgerMenu.classList.toggle(`active`);
  burgerBtn.classList.toggle(`active`);
  body.classList.toggle(`active`);
});

burgerMenu.addEventListener(`click`, (e) => {
  if (!e.target.classList.contains(`.nav-link`)) {
    burgerMenu.classList.remove(`active`);
    burgerBtn.classList.remove(`active`);
    body.classList.remove(`active`);
  }
});
