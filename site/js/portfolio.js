const avatar = document.querySelector("#avatar-profile");

avatar.addEventListener("click", function() {
    avatar.src = "image/avatar-bis.png";
});


const firstName = document.querySelector("#firstname");
const button = document.querySelector("#modify-btn");
const buttonTool = document.querySelector("#btn-tools")
const buttonAdd = document.querySelector("#btn-add")
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
        buttonTool.style.backgroundColor = newColor;
        buttonAdd.style.backgroundColor = newColor;
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

const frontTools = document.querySelector("#front-dev-tools")

buttonTool.addEventListener("click", function(){
    frontTools.innerHTML =("<ul><li>VsCode</li><li>GitHub</li><li>Terminal</li></ul>")

})


const devToolsInput = document.querySelector("#devTools")
const devToolsList = document.querySelector("#tools");

buttonAdd.addEventListener("click", function() {
    const newTool = devToolsInput.value; 
    if (newTool !== "") {
        const li = document.createElement("li"); 
        li.innerText = newTool; 
        devToolsList.appendChild(li); 
        devToolsInput.value = "";
        }
});
