const avatar = document.querySelector(".avatar img");

avatar.addEventListener("click", () => { 
   avatar.src = "image/avatar.svg";
})

const description = document.querySelector(".description");
const firstName = document.querySelector("#firstname");
const textColor = document.querySelectorAll(".pink-text");
const footer = document.querySelector(".description .pink-bg");

const button = document.createElement("button");
button.innerText= "Modify text and color";
description.appendChild(button);

button.addEventListener("click", () => {
    let userName = prompt("write your name");
    firstName.style.color="white";
    firstName.innerHTML= userName;
    description.style.background="#750ff7";
    textColor.style.color="#750ff7";
    footer.style.color="#750ff7";
})