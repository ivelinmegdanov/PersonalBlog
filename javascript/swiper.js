const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  direction: getDirection(),
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".skill__boxes__pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      spaceBetween: 60,
    },
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  return direction = window.innerWidth <= 1024 ? "vertical" : "horizontal";
}