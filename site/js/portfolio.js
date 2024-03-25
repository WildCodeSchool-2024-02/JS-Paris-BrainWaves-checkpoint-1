//Change avatar on click
const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", () => {
    avatar.src = "image/avatar-bis.png"
})

//Change name and color
const nameButton = document.querySelector("#change-name")
const firstName = document.querySelector("#firstname")

nameButton.addEventListener("click", () => {
    firstName.textContent = prompt("What's your name ?");
    firstName.style.color = "white";

})
