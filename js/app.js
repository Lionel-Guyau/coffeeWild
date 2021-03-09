const App = function () {
  "use strict";

  /* Click Dark Mode */
  const inputCoffee = document.getElementById("inputCoffee");
  const submitButton = document.getElementById("submit");
  const formCoffee = document.getElementById("formCoffee");

  submitButton.disabled = true;
  inputCoffee.onkeyup = () => {
    if (inputCoffee.value.length > 0) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  };
};
App()
