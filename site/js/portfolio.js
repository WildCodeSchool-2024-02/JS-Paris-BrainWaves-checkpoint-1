imgBtn = document.querySelector(".img");
imgBtn.addEventListener("click", function () {
    imgBtn.src = "/site/image/avatar.svg";
});

btnPrompt = document.querySelector(".btn_prompt");

btnPrompt.addEventListener("click", function () {
    let name = prompt("Please enter your name");
    let color = prompt("What is your favorite color?");
    let elemColor = document.getElementsByClassName("pink-bg")[0];
    let elemTxtColor = document.getElementsByClassName("pink-text");

    promptName = document.getElementById("firstname");
    promptName.innerText = name;

    elemColor.style.backgroundColor = color;
    document.getElementById("firstname").style.color = "white";

    console.log("yes");
    console.log(promptName);
    for (let i in elemTxtColor) {
        elemTxtColor[i].style.color = color;
        // donne une erreur jsp pas pourquoi
    }
});
