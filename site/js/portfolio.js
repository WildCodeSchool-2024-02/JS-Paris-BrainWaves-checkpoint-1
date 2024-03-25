const changeLogo = document.querySelector('.logo');

changeLogo.addEventListener('click', function () {
  changeLogo.src = "image/avatar.svg";
});

const name = prompt("What is your name?");
const element = document.getElementById("firstname");
element.innerHTML = name;
document.getElementById("firstname").style.color = "white";

