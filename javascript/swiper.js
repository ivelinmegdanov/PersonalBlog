let swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  direction: getDirection(),
  spaceBetween: getSpaceBetween(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".skill__boxes__pagination",
    clickable: true,
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  let direction = window.innerWidth <= 1023 ? "vertical" : "horizontal";

  return direction;
}

function getSpaceBetween() {
  let spacebetween = window.innerWidth <= 1023 ? 32 : 60;

  return spacebetween;
}