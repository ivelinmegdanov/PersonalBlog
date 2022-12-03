function filterSelection(section) {
  let element = document.getElementsByClassName("portfolio__box");
  if (section == "all") {
    section = "";
  }
  for (let i = 0; i < element.length; i++) {
    RemoveClass(element[i], "portfolio__show");
    if (element[i].className.indexOf(section) > -1)
      AddClass(element[i], "portfolio__show");
  }
}

function AddClass(element, name) {
  let arr1 = element.className.split(" ");
  let arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  let arr1 = element.className.split(" ");
  let arr2 = name.split(" ");
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

let btnContainer = document.getElementsByClassName("portfolio__btns");
let btns = btnContainer[0].getElementsByClassName("portfolio__btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("btn__active");
    current[0].className = current[0].className.replace(" btn__active", "");
    this.className += " btn__active";
  });
}