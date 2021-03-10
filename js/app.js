const App = function () {
  "use strict";

  /* Click Dark Mode */
<<<<<<< HEAD
  let label = document.querySelector(".switch");
  let slider = document.querySelector(".slider");
  
  label.addEventListener("click", function() {
    document.body.classList.toggle("darkMode");
    slider.classList.toggle("darkMode");
  })

  /* Test Coffee Wild */
  const inputCoffee = document.getElementById("inputCoffee");
  const inputAge = document.getElementById("inputAge");
  const submitButton = document.getElementById("submit");
  const formCoffee = document.getElementById("formCoffee");
  

  submitButton.disabled = true;
  inputCoffee.onkeyup = () => {
    if (inputCoffee.value.length && inputAge.value.length > 0) {
=======
  const inputCoffee = document.getElementById("inputCoffee");
  const submitButton = document.getElementById("submit");
  const formCoffee = document.getElementById("formCoffee");

  submitButton.disabled = true;
  inputCoffee.onkeyup = () => {
    if (inputCoffee.value.length > 0) {
>>>>>>> 84b9fc23c6051b4ce6485e9a15cf0f95d90abcea
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  };
<<<<<<< HEAD
/*
  formCoffee.onsubmit = function(e) {
    e.preventDefault();

    inputCoffee.disabled = true
    submitButton.disabled = true

    let CaféDepuisLaNaissance = document.getElementById("");
    let CaféRestantJusquaLaMort = document.getElementById("");
    let totalCaféDansUneVie = document.getElementById("");
    let tauxDeCaféine = document.getElementById("");
    let convertionCaféAlHeure = document.getElementById("");
    
    
  }*/
};
App();
=======
};
App()
>>>>>>> 84b9fc23c6051b4ce6485e9a15cf0f95d90abcea
