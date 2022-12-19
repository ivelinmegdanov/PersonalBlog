const skillsSwiper = new Swiper(".skills__swiper", {
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

const portfolioSwiper = new Swiper(".portfolio__swiper", {
  slidesPerView: 3,
  spaceBetween: 32,
  direction: 'vertical',
  navigation: {
    nextEl: ".swiper-button-next.portfolio-button",
    prevEl: ".swiper-button-prev.portfolio-button",
  },
  pagination: {
    el: ".portfolio__boxes__pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      direction: 'horizontal',
    },
  },
});

const testimonialSwiper = new Swiper(".testimonial__swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next.testimonial-button",
    prevEl: ".swiper-button-prev.testimonial-button",
  },
  pagination: {
    el: ".testimonial__boxes__pagination",
    clickable: true,
  },
});

testimonialSwiper.on('slideChange', function() {
  const nextButtons = document.getElementsByClassName('testimonial-button');
  for (let i = 0; i < nextButtons.length; i++) {
    const currentElement = nextButtons[i];
    if(i === 0 || i === (nextButtons.length - 1)){
      currentElement.classList.add("swiper-button-disabled");
    }else{
      currentElement.classList.remove("swiper-button-disabled");
    }
  };
});