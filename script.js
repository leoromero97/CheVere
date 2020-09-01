//Este script es para la topbar.
let burger = document.querySelector(".burger");
let topbar = document.querySelector(".links");
let inicio = document.getElementById("homeI");
let sobreMi = document.getElementById("aboutI");
let contact = document.getElementById("contactI");
let menu = document.getElementById("menuI");
let kit = document.getElementById("kitI");

burger.addEventListener("click", () => {
  topbar.classList.toggle("sidebar");
  //Animacion del menu hamburguesa, pasa a ser una X
  burger.classList.toggle("toggle");
});

inicio.addEventListener("click", () => {
  inicio.classList.add("tupperNav");
  sobreMi.classList.remove("tupperNav");
  contact.classList.remove("tupperNav");
  menu.classList.remove("tupperNav");
  kit.classList.remove("tupperNav");
});

sobreMi.addEventListener("click", () => {
  sobreMi.classList.add("tupperNav");
  inicio.classList.remove("tupperNav");
  contact.classList.remove("tupperNav");
  menu.classList.remove("tupperNav");
  kit.classList.remove("tupperNav");
});

contact.addEventListener("click", () => {
  contact.classList.add("tupperNav");
  inicio.classList.remove("tupperNav");
  sobreMi.classList.remove("tupperNav");
  menu.classList.remove("tupperNav");
  kit.classList.remove("tupperNav");
});

menu.addEventListener("click", () => {
  menu.classList.add("tupperNav");
  inicio.classList.remove("tupperNav");
  sobreMi.classList.remove("tupperNav");
  contact.classList.remove("tupperNav");
  kit.classList.remove("tupperNav");
});

kit.addEventListener("click", () => {
  kit.classList.add("tupperNav");
  inicio.classList.remove("tupperNav");
  sobreMi.classList.remove("tupperNav");
  contact.classList.remove("tupperNav");
  menu.classList.remove("tupperNav");
});

//A Partir de esta linea se ejecuta el script para el boton que aparece para subir
window.onscroll = function () {
  if (document.documentElement.scrollTop > 400) {
    document.querySelector(".containerGoTop").classList.add("showGoTop");
    document.querySelector(".subir").classList.remove("ocultarContenido");
    document.querySelector(".up").classList.remove("ocultarContenido");
  } else {
    document.querySelector(".containerGoTop").classList.remove("showGoTop");
    document.querySelector(".subir").classList.add("ocultarContenido");
    document.querySelector(".up").classList.add("ocultarContenido");
  }
}

//Animacion de las secciones y la navbar
let home = document.getElementById("home");
window.addEventListener("scroll", () => {
  let currentHeight = window.scrollY; //parte superior de la pantalla
  let homePositionY = home.scrollHeight =+ 200;
  if (currentHeight >= homePositionY) {
    inicio.classList.add("tupperNav");
    sobreMi.classList.remove("tupperNav");
    contact.classList.remove("tupperNav");
    menu.classList.remove("tupperNav");
    kit.classList.remove("tupperNav");
  }
});


let about = document.getElementById("about");
window.addEventListener("scroll", () => {
  let currentHeight2 = window.scrollY; //parte superior de la pantalla
  let aboutPositionY = about.scrollHeight =+ 500;

  if (currentHeight2 >= aboutPositionY) {
    sobreMi.classList.add("tupperNav");
    inicio.classList.remove("tupperNav");
    contact.classList.remove("tupperNav");
    menu.classList.remove("tupperNav");
    kit.classList.remove("tupperNav");
  }
});

let footer = document.getElementById("contact");
window.addEventListener("scroll", () => {
  let currentHeight3 = window.scrollY; //parte superior de la pantalla
  let contactPositionY = about.scrollHeight =+ 1400;

  if (currentHeight3 >= contactPositionY) {
    contact.classList.add("tupperNav");
    inicio.classList.remove("tupperNav");
    sobreMi.classList.remove("tupperNav");
    menu.classList.remove("tupperNav");
    kit.classList.remove("tupperNav");
  }
});

//SCRIPT PARA EL SLIDER SHOW
let slider = document.querySelector(".slideShow");
let sliderIndividual = document.querySelectorAll(".slide"); //slide es mySlides
let contador = 1;
let width = sliderIndividual[0].clientWidth; //es para calcular el ancho del primer slider

window.addEventListener("resize", function () {
  width = sliderIndividual[0].clientWidth; //esta funcion es para que cada vez que el usuario gire la pantalla se actualice el width
});

setInterval(function () {
  slides();
}, 6000);

function slides() {
  slider.style.transform = "translate(" + (-width * contador) + "px)"; //hace un barrido total del width actual
  slider.style.transition = "transform 2s";
  contador++;

  if (contador == sliderIndividual.length) {
    setTimeout(function () {
      slider.style.transform = "translate(0px)";
      slider.style.transition = "transform 0s ease-in-out";
      contador = 1;
    }, 2000)
  }
}