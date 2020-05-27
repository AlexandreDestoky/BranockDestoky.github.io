//
// ./scss/menu.js
//

//fonction de Toggle pour la visibilité
function toggleVisible(btnClass, elementClass) {
  const btns = document.querySelectorAll(btnClass);
  for (let btn of btns) {
     btn.addEventListener("click",function(){
       this.parentElement.querySelector(elementClass).classList.toggle("visible");
       removeVisible(btnClass, elementClass);
     });
  }
}

//TOGGLE .visible sur le .menu-dropdown-menu
toggleVisible(".menu-dropdown-btn",".menu-dropdown-menu");
//TOGGLE .visible sur le .menu-slider-menu
toggleVisible(".menu-slider-btn",".menu-slider-menu");


function removeVisible(btnClass, elementClass) {
  // Supprimer le .visible quand on clique sur autre chose qu'un menu
  window.addEventListener("click", function(e) {
    // Si ce n'est pas le boutonn
    if(!(e.target.matches(btnClass) || e.target.closest(btnClass))) {
      document.querySelector(elementClass).classList.remove("visible");
    }
  })
}
