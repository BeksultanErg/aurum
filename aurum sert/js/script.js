'use strict';

const body = document.body;
const bergerMenu = document.querySelector('.burger-menu');
const mobileNav  = document.querySelector('.mobile-nav');

bergerMenu.addEventListener('click', () => {
   bergerMenu.classList.toggle('change');
   mobileNav.classList.toggle('active');
   body.classList.toggle('noscroll');
});

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}