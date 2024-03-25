function changeAvatar(){
    document.getElementById("avatar").src = "./image/avatar.svg"
}

function changeName(){
    const color = prompt("Enter a color")
    const name = prompt("Enter your name")
    document.getElementById("firstname").innerText = name
    document.getElementById("firstname").style.color = "white"
    document.getElementsByClassName("pink-bg")[0].style.backgroundColor = color;

    const elems = document.getElementsByClassName("pink-text")

    for(let i in elems){
        elems[i].style.color = color;
    }

    
}