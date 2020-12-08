var mainTimer = document.getElementById("mainTimer")
var timer = document.getElementById("timer")
var button = document.getElementById("button")
var bat= document.getElementById("bat")
var ninja = document.getElementById("ninja")
var lines = document.getElementById("lines")



button.onclick = function(){
    bat.classList = "startBat bat"
    ninja.classList = "startNinja ninja"
    lines.classList = "lines"

    setTimeout(() =>{
        ninja.classList = "startNinja ninja ninjaStep"
    }, 3000);

    setTimeout(() =>{
        bat.classList = "startBat bat batStep"
    }, 3000);


 

    bat.style.display = "inline"
    ninja.style.display = "inline"

}









