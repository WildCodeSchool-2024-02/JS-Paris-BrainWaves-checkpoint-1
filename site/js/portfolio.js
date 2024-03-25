const imgAvatar = document.querySelector(".avatar");
imgAvatar.addEventListener("click", function () {
  imgAvatar.src = "image/avatar.svg";
});

function modifName() {
  const reponse = prompt("Entrez votre nom :");
  const elementReponse = document.getElementById("firstname");
  elementReponse.textContent = reponse;
}

// const backGround = document.querySelector(".test");
// const clickeuh = document.querySelector("button");
// clickeuh.onclick = function () {
//   backGround.style.backgroundColor = "#750ff7";
// };
