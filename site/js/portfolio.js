let editAvatar = document.querySelector("#avatar-icon");
let newAvatar = document.querySelector("#avatar-icon");

editAvatar.addEventListener("click", function () {
    newAvatar.src = "image/avatar.svg";
});

const changeBtn = document.querySelector("#btn")
const colorFirstname = document.querySelector("#firstname")

changeBtn.addEventListener("click", function () {
 let changeName = prompt("Enter your name");
 colorFirstname.style.color = "white";
 colorFirstname.innerText = changeName;
})