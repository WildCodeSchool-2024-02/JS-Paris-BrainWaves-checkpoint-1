const newImage = document.querySelector(".Photo")
const editProfile = document.querySelector(".Photo")

editProfile.addEventListener("click", function () {
   newImage.src = "/site/image/avatar.svg";
    });
  

const newsColor = document.querySelector(".buttton")
const firstname =document.querySelector("#firstname")

newsColor.addEventListener("click" , function () {
    let changeName = prompt  ("Prénom"); 
    firstname.style.color = "white";
    firstname.innerText = changeName
    
});