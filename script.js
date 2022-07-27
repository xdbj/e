//resize box on fullscreen
window.addEventListener('resize', (evt) => { 
    if (window.innerHeight == screen.height) {
        document.getElementById("box").style.height = "1040px";

    } else {
        document.getElementById("box").style.height = "900px";
    }
});

function onhover1() {
    mydiv=document.getElementById("mydiv")
    setTimeout(function() {mydiv.width="5px"}, 500);
    setTimeout(function() {mydiv.width="10px"}, 500);
    setTimeout(function() {mydiv.width="15px"}, 500);
    setTimeout(function() {mydiv.width="20px"}, 500);
    setTimeout(function() {mydiv.width="25px"}, 500);
    setTimeout(function() {mydiv.width="30px"}, 500);
    setTimeout(function() {mydiv.width="35px"}, 500);
    setTimeout(function() {mydiv.width="40px"}, 500);
  };