// Kijelöljük egy változóba a forward-arrow képet
const forwardArrow = document.querySelector(".js-forward");
const backwardArrow = document.querySelector(".js-backward")
// Létrehozunk egy függvényt ami az arrow-ra klikkelésre indul el.
forwardArrow.onclick = function() {
    // Kijelöljük a tárolót (js-movies), amire egy scrollLeft attribútumot adunk meg ami 800px-el tolja el balra (scrollLeft += 800)
    document.querySelector(".js-movies").scrollLeft += 800;
}
// U.e visszafele scrollozáshoz a -= 800-al
backwardArrow.onclick = function() {
    document.querySelector(".js-movies").scrollLeft -= 800;
}