const avatarImg = document.querySelector('.avatar');
avatarImg.addEventListener('click', () => {
    avatarImg.src = 'image/avatar-bis.png'
})

const btn = document.querySelector('.btn');
const nameTochange = document.querySelector('#firstname');
const colorInput = document.querySelector('.pink-bg')
const footer = document.querySelector('#footer')
const colorTxt = document.querySelectorAll('.pink-text')



btn.addEventListener('click', () => {
    const newColor = prompt('Chose your color')
    const newValue = prompt('Enter your name');
    nameTochange.style.color = 'black'
    nameTochange.innerText = newValue;
    colorInput.style.backgroundColor = newColor;
    footer.style.backgroundColor = newColor;

    for (let i = 0; i < colorTxt.length; i++) {
        colorTxt[i].style.color = newColor;
    }



})