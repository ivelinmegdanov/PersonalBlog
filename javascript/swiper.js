const swiper = new Swiper(".swiper", {
  direction: 'vertical',
  slidesPerView: 3,
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
      direction: 'horizontal',
    },
  },
});