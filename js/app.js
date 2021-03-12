const App = function () {
  "use strict";

  /* Click Dark Mode */
  const label = document.querySelector(".switch");
  const slider = document.querySelector(".slider");
  const submitButton = document.getElementById("submit");
  const bigCard = document.querySelectorAll(".bigCard");
  const smallCard = document.querySelectorAll(".smallCard");
  const header = document.querySelector("header");

  label.addEventListener("click", function () {
    document.body.classList.toggle("darkMode");
    slider.classList.toggle("darkMode");
    header.classList.toggle("darkMode");
    submitButton.classList.toggle("darkMode");
    bigCard.forEach((card) => {
      card.classList.toggle("darkMode");
    });
    smallCard.forEach((card) => {
      card.classList.toggle("darkMode");
    });
  });

  /* Coffee Wilders Calculation */
  const inputCoffee = document.getElementById("inputCoffee");
  const inputAge = document.getElementById("inputAge");
  const formCoffee = document.getElementById("formCoffee");

  formCoffee.onsubmit = function (e) {
    e.preventDefault();

    /* Number of coffee by year */
    const coffeeByDay = inputCoffee.value;
    const coffeeByMonth = coffeeByDay * 30;
    const coffeeByYear = coffeeByMonth * 12;

    /* Difference between 15 years old and age user */
    const diffAge = (a, b) => {
      return Math.abs(a - b);
    };
    const differenceAgeBornToUser = diffAge(inputAge.value, 15);
    const differenceAgeUserToDeath = diffAge(inputAge.value, 90);

    /* BIG CARD 1 */
    const bigCard1 = document.getElementById("coffeeSinceBorn");
    const coffeeSinceBorn = differenceAgeBornToUser * coffeeByYear;
    bigCard1.innerHTML = `${Math.round(coffeeSinceBorn)} cafés`;

    /* BIG CARD 2 */
    const bigCard2 = document.getElementById("cafeinLevel");
    const cafeinLevel = coffeeByDay * 40;
    bigCard2.innerHTML = `${Math.round(cafeinLevel)} mg`;

    /* BIG CARD 3 */
    const bigCard3 = document.getElementById("timeLeftToLive");
    const coffeeToDeath = differenceAgeUserToDeath * coffeeByYear;
    bigCard3.innerHTML = `${Math.round(coffeeToDeath)} cafés`;

    /* BIG CARD 4 */
    const bigCard4 = document.getElementById("totalCoffeeInLife");
    const totalCoffeeInLife = coffeeSinceBorn + coffeeToDeath;
    bigCard4.innerHTML = `${Math.round(totalCoffeeInLife)} cafés`;

    /* SMALL CARD 1 */
    const smallCard1 = document.getElementById("coffeeByHour");
    const coffeeByHour = coffeeByDay / 24;
    smallCard1.innerHTML = `${coffeeByHour.toFixed(2)} cafés`;

    /* SMALL CARD 2 */
    const smallCard2 = document.getElementById("coffeeFilter");
    const coffeeFilters = coffeeSinceBorn / 4;
    smallCard2.innerHTML = `${Math.round(coffeeFilters)} filtres`;

    /* SMALL CARD 3 */
    const smallCard3 = document.getElementById("burn");
    const burn = totalCoffeeInLife / 18;
    smallCard3.innerHTML = `${Math.round(burn)} fois`;

    /* SMALL CARD 4 */
    const smallCard4 = document.getElementById("coffeeSink");
    const coffeeSink = totalCoffeeInLife / 48;
    smallCard4.innerHTML = `${Math.round(coffeeSink)} fois`;

    /* SMALL CARD 5 */
    const smallCard5 = document.getElementById("upSideDown");
    const upSideDown = totalCoffeeInLife / 110;
    smallCard5.innerHTML = `${Math.round(upSideDown)} fois`;

    /* SMALL CARD 6 */
    const smallCard6 = document.getElementById("paidToSomeone");
    const paidToSomeone = totalCoffeeInLife * 128;
    smallCard6.innerHTML = `${Math.round(paidToSomeone)} fois`;

    /* SMALL CARD 7 */
    const smallCard7 = document.getElementById("paidBySomeone");
    const paidBySomeone = totalCoffeeInLife / 12843;
    smallCard7.innerHTML = `${Math.round(paidBySomeone)} fois`;

    /* SMALL CARD 8 */
    const smallCard8 = document.getElementById("missingCoffee");
    smallCard8.innerHTML = "Le manque de café !";

    /* INSERT IMAGE AFTER CLICK */
    const coffeeImg = document.getElementById("coffeeImg");
    const triggerAnimation = document.getElementById("triggerAnimation");
    inputCoffee.value > 10
      ? coffeeImg.classList.add("show")
      : coffeeImg.classList.remove("show");
    triggerAnimation.addEventListener("click", function () {
      coffeeImg.classList.add("moshPits");
    });
  };

  /* TILT EFFECT */
  if (window.matchMedia("(min-width: 1100px)").matches) {
    VanillaTilt.init(document.querySelectorAll(".tiltEffect"), {
      max: 10,
      speed: 500,
      scale: 1.06,
      perspective: 1000,
    });
  }
};
App();
