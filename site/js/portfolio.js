let clicked = false;

function toggleAvatar(img) {
  if (clicked) img.src = "image/avatar.svg";
  else img.src = "image/avatar-bis.png";

  clicked = !clicked;
}

const descriptionBtn = document.querySelector(".description>button");
const firstName = document.querySelector("#firstname");


descriptionBtn.addEventListener("click", () => {
  const newName = prompt('Entrez un nouveau nom : \n');
  firstName.innerText = newName;
  firstName.style.color = "white";
});