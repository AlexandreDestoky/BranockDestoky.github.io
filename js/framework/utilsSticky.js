//
// ./scss/utilsSticky.js
//

// ELEMENT STICKY --------------------------------
//on observe la classe sticky et quand il y a une intersection, on ajoute la classe sticked
const observer = new IntersectionObserver(function(observables){
  for(let observable of observables) {
    observable.target.closest(".sticky").classList.toggle("sticked", !observable.isIntersecting);
    //FORME LONGUE
    // if(!observable.isIntersecting) {
    //   observable.target.closest(".sticky").classList.add("sticked");
    // } else {
    //   observable.target.closest(".sticky").classList.remove("sticked");
    // }
  }
});
//on ajoute la classe trigger dans un div au dessus
const stickies = document.querySelectorAll(".sticky");
for(let sticky of stickies) {
  const trigger = document.createElement("div");
  trigger.classList.add("trigger");
  sticky.appendChild(trigger);
}

//on observe les triggers
const triggers = document.querySelectorAll(".trigger");
for(let trigger of triggers) {
  observer.observe(trigger);
}
