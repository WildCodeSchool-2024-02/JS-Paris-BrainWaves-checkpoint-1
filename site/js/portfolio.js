// Changement image avatar
const avatar = document.querySelector('.avatarlogo');

avatar.addEventListener('click', () => {
    console.log(avatar)
    avatar.src = "./image/avatar.svg";
})

// Changement texte + couleur
const text = document.querySelector('#firstname');
const button = document.querySelector('#textcolor');
const color = [...document.querySelectorAll('.description.pink-bg')];
const textPink = [...document.querySelectorAll('.pink-text')];
const colorLink = [...document.querySelectorAll('a')];
console.log(color);
console.log(textPink);

button.addEventListener('click', () => {
    const background = prompt('Choisissez la couleur du fond');
    const value = prompt('Tapez votre prénom');
    for (const value of color) {
        value.style.backgroundColor = background;
    }
    for (const text of textPink) {
        text.style.color = background;
    }
    for (const link of colorLink) {
        link.style.color = background;
    }
    text.style.color = "white";
    text.innerHTML = value;
})

// Changement d'éléments dans la liste Li
const list = [...document.querySelectorAll('.li-modif')];
const buttonModify = document.querySelector('.modify-button');
console.log(list);

buttonModify.addEventListener('click', () => {
    list[0].innerHTML = "VSCode";
    list[1].innerHTML = "Github";
    list[2].innerHTML = "Terminal";
})

// Ajout d'un élément dans la liste d'outils
const buttonAdd = document.querySelector('.add-button');
const listTools = document.querySelector('.list-tools');
console.log(listTools);
const input = document.querySelector('#input');

buttonAdd.addEventListener('click', (event) => {
    event.preventDefault();
    const newTool = document.createElement('li')
    newTool.innerText = input.value;
    console.log(input.value);
    listTools.appendChild(newTool);
    input.value = "";
})

