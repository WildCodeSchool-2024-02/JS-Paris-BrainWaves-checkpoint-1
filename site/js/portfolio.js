const imgAvatar = document.querySelector("#img-avatar");

imgAvatar.addEventListener ("click", function(){
    imgAvatar.src = "image/avatar-bis.png"
});

const colorButton = document.querySelector("#color-and-text");
const firstName = document.querySelector("#firstname");
const pinkBg = document.querySelectorAll(".pink-bg");
const pinkText = document.querySelectorAll(".pink-text");

colorButton.addEventListener ("click", function(){
    const newName = prompt("Enter your name :");
    firstName.innerText = newName;
    firstName.style.color = "white";

    for (let i= 0; i<pinkBg.length; i++){
    pinkBg[i].style.backgroundColor = "#750ff7";
    }

    for (let i= 0; i<pinkText.length; i++){
    pinkText[i].style.color = "#750ff7";
    }
});


