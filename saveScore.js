const guardarResultados = (event) => {
let element = event.target;  
let parentDiv = element.closest(".pregunta");
parentDiv.classList.add("hide")
let divBrother = parentDiv.nextElementSibling;
divBrother.classList.remove("hide");
};


let classArray = document.getElementsByClassName("btn-questions");



var i;
for (i = 0; i < classArray.length; i++) {
  classArray[i].addEventListener('click', guardarResultados, false);

}