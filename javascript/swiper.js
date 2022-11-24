var swiper = new Swiper(".swiper", {
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
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 1023 ? "vertical" : "horizontal";

  return direction;
}

function getSpaceBetween() {
  var windowWidth = window.innerWidth;
  var spacebetween = window.innerWidth <= 1023 ? 32 : 60;

  return spacebetween;
}