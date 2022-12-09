function filterSelection(section) {
  const portfolioElements = document.getElementsByClassName("portfolio__box");

  for (let i = 0; i < portfolioElements.length; i++) {
    const currentElement = portfolioElements[i];

    if (currentElement.classList.contains(section) || section === "") {
      currentElement.classList.add("portfolio__show");
    } else {
      currentElement.classList.remove("portfolio__show");
    }
  }
  portfolioSwiper.update();
}

const btnContainer = document.getElementsByClassName("portfolio__btns");
const btns = btnContainer[0].getElementsByClassName("portfolio__btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const activeButton = document.getElementsByClassName("btn__active");
    activeButton[0].classList.remove("btn__active");
    this.classList.add("btn__active");
  });
}