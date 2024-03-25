let clicked = false

function toggleAvatar(e) {
    if (clicked)
    img.scr = "image/avatar.svg";
else
img.src = "image/avatar-bis.png";

clicked = !clicked;
}

const descriptionByn = document .querySelector(" .description>button");
const firstName = document .querySelector("firstname");

descriptionByn.addEventListener("click" , {} => {
    const newName = prompt (' Entrez un nouveau nom :')
    firstName .innerText = newName
    firstName .Style.color = "white"
} );