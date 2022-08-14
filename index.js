let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("mountains_front");
let header = document.querySelector("header");
const pbuttons = document.querySelectorAll(".p-button");
let donate = document.getElementById("donate-amount");
let donations = 0;

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  stars.style.left = value * 0.5 + "px";
  moon.style.top = value * 1.05 + "px";
  mountains_behind.style.top = value * 0.5 + "px";
  mountains_front.style.top = value * 0 + "px";
  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  header.style.top = value * 0.5 + "px";
});

function calculateTip(event) {
  event.preventDefault();
  const donateButton = parseInt(event.target.value);
  let donateAmount = 0;

  switch (donateButton) {
    case 1:
      donateAmount = 1;
      break;
    case 2:
      donateAmount = 2;
      break;
    case 5:
      donateAmount = 5;
      break;
    case 10:
      donateAmount = 10;
      break;
    case 50:
      donateAmount = 50;
      break;
  }
  donations += donateAmount;

  donate.innerHTML = donations;
}

pbuttons.forEach(function (elem) {
  elem.addEventListener("click", calculateTip);
  //this function does stuff
});


let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}