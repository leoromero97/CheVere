//A Partir de esta linea se ejecuta el script para el boton que aparece para subir
window.onscroll = function () {
  if (document.documentElement.scrollTop > 700) {
    document.querySelector(".containerGoTop").classList.add("showGoTop");
    sobreMi.classList.add("state");
    contacto.classList.remove("state");

  } else {
    document.querySelector(".containerGoTop").classList.remove("showGoTop");
    inicio.classList.add("state");
    sobreMi.classList.remove("state");
    contacto.classList.remove("state");
  }
}

//Este script es para la topbar.
let burger = document.querySelector(".burger");
let topbar = document.querySelector(".links");

burger.addEventListener("click", () => {
  topbar.classList.toggle("sidebar");
  //Animacion del menu hamburguesa, pasa a ser una X
  burger.classList.toggle("toggle");
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
}, 8000);

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
