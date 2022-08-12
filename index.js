let inputs = document.getElementsByTagName("input");
let errors = document.querySelectorAll("#error");

for (let x = 0; x < inputs.length; x++) {
  inputs[x].addEventListener("blur", function () {
    if (inputs[x].value === "") {
      inputs[x].style.border = "1px solid red";
      errors[x].style.display = "block";
    } else {
      inputs[x].style.border = "1px solid hsl(249, 99%, 64%)";
      errors[x].style.display = "none";
    }
  });
}

let submitCheck = document.getElementById("submit-check");
let formCheck = document.getElementById("formCheck");
let checkSubmit = document.querySelector(".container-success");

submitCheck.addEventListener("click", function () {
  let cardNumber = document.getElementById("card-number");
  let cardName = document.getElementById("card-name");
  let cardExpiry = document.getElementById("card-expiry");
  let cardCvv = document.getElementById("card-cvv");
  let Newdata = [cardName, cardNumber, cardExpiry, cardCvv];
  // for (let x in inputs) {
  //   Newdata[x].innerHTML = inputs[x].value;
  // }
  formCheck.style.display = "none";
  checkSubmit.style.display = "block";
});
