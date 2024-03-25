const avatar = document.querySelector(".avatar img");

avatar.addEventListener("click", () => { 
   avatar.src = "image/avatar.svg";
})

const description = document.querySelector(".description");
const firstName = document.querySelector("#firstname");

const button = document.createElement("button");
button.innerText= "Modify text and color";
description.appendChild(button);

button.addEventListener("click", () => {
    let userName = prompt("write your name");
    firstName.style.color="white";
    firstName.innerHTML= userName;
    description.style.background="#750ff7"
})