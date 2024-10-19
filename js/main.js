let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mount3 = document.getElementById("mount3");
let mount4 = document.getElementById("mount4");
let river = document.getElementById("river5");
let boat = document.getElementById("boat6");
let nouvil = document.querySelector(".nouvil");

window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 3 + "px";
    mount3.style.top = value * 2 + "px";
    mount4.style.top = value * 1.5 + "px";
    river.style.top = value + "px";
    boat.style.top = value + "px";
    boat.style.left = value * 3 + "px";
    nouvil.style.fontSize = value + "px";
    if(scrollY >= 67) {
        nouvil.style.fontSize = 67 + "px";
        nouvil.style.position = "fixed";
        if(scrollY >= 478) {
            nouvil.style.display = "none";
        }else{
            nouvil.style.display = "block";
        }
        if(scrollY >= 127) {
            document.querySelector(".main").style.background = 'linear-gradient(#376281, #10001f)';
        }else {
            document.querySelector(".main").style.background = 'linear-gradient(#200016, #10001f)';

        }
    }
}