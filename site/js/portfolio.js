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
    }
)


//Change list of skills
const frontButton = document.querySelector(".change-front-skills") 
const frontList = document.querySelector("#front-dev-tools")

frontButton.addEventListener("click", () => {
    frontList.innerHTML = `<li>VSCode</li>
    <li>GitHub</li>
    <li>Terminal</li>`
    }
)

//Add skill to Backend skills list
const newBackInput = document.querySelector("#new-back-skill")
const backButton = document.querySelector("back-button")
const backSkills = document.querySelector("#back-dev-tools")

addEventListener("submit", (event) => {
    event.preventDefault();
    const newBackSkill = document.createElement("li");
    newBackSkill.textContent = newBackInput.value;
    console.log(newBackSkill)
    backSkills.appendChild(newBackSkill);
    }
)


