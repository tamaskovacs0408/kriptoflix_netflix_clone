
const forwardArrow = document.querySelector(".js-forward");
const backwardArrow = document.querySelector(".js-backward")

forwardArrow.onclick = function() {
    
    document.querySelector(".js-movies").scrollLeft += 800;
}

backwardArrow.onclick = function() {
    document.querySelector(".js-movies").scrollLeft -= 800;
}
