const avatar = document.querySelector("#avatar-profile");

avatar.addEventListener("click", function() {
    avatar.src = "image/avatar-bis.png";
});


const firstName = document.querySelector("#firstname");
const button = document.querySelector("#modify-btn");
const backgroundColor = document.querySelector(".pink-bg");
const textColortoChange = document.querySelectorAll(".pink-text");
const footer = document.querySelector("footer");
const allLinks = document.querySelectorAll("a")

button.addEventListener("click", function() {
    const newColor = prompt("Enter your color");
    const newFirstName = prompt("Enter your first name:");
    if (newFirstName !== null) {
        firstName.textContent = newFirstName;
        firstName.style.color = "white";
        backgroundColor.style.backgroundColor = newColor;
        footer.style.backgroundColor = newColor;
        textColortoChange.forEach(function(element) {
            element.style.color = newColor;
        });
        allLinks.forEach(function(link){
            link.style.color = newColor;
        })
        
    }
});
