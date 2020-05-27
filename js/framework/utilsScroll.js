//
// ./scss/utilsScroll.js
//

//CLASSE
// .scroll-trigger => l'élément que l'on scroll
//.scroll-trigger .visible  => l'élément une fois qu'il est visible

// ELEMENT SCROLL --------------------------------
const observerScroll = new IntersectionObserver(function(observables) {
  for(let observable of observables) {
    if(observable.isIntersecting) {
      observable.target.classList.add("visible");
    }
  }
}, {
  threshold:.8 // ne s'active que quand 80% du contenu est visible
});

const scrollTriggers = document.querySelectorAll(".scroll-trigger");
for(scrollTrigger of scrollTriggers) {
  observerScroll.observe(scrollTrigger);
}

//
