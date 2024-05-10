'use strict';

window.addEventListener("load", mostrarMensajeBienvenida);

function mostrarMensajeBienvenida() {
  const mensaje = "¡Bienvenidos a Batallando con Dionisio Santana!";
  alert(mensaje);
}


'text/javascript';

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  if (preloader) {
    preloader.classList.add("loaded");
  }
  
  if (document.body) {
    document.body.classList.add("loaded");
  }
});

 

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
   navbar.classList.toggle("active"); 
  }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
   navbar.classList.remove("active"); 
  }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

