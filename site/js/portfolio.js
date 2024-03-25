//Change avatar on click
const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", () => {
    avatar.src = "image/avatar-bis.png"
})

//Change name and color
const nameButton = document.querySelector("#change-name")
const firstName = document.querySelector("#firstname")
const bgColor = document.querySelectorAll(".pink-bg")
const textColor = document.querySelectorAll(".pink-text")
const links = document.querySelectorAll("a")

nameButton.addEventListener("click", () => {
    firstName.textContent = prompt("What's your name ?");
    firstName.style.color = "white";
    for (let bg of bgColor)
        bg.style.backgroundColor = "#750ff7"
    for (let text of textColor)
        text.style.color = "#750ff7"
    for (let link of links)
        link.style.color = "#750ff7"
})
