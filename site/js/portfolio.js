function changeAvatar(){
    document.getElementById("avatar").src = "./image/avatar.svg"
}

function changeName(){
    const color = prompt("Enter a color")
    const name = prompt("Enter your name")

    //Editing the first name
    document.getElementById("firstname").innerText = name
    document.getElementById("firstname").style.color = "white"

    //Editing the background color of the div
    document.getElementsByClassName("pink-bg")[0].style.backgroundColor = color;


    // Getting all elements that are pink
    const elems = document.getElementsByClassName("pink-text")

    for(let i in elems){
        elems[i].style.color = color;
    }

    
}