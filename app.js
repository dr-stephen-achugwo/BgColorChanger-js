
// Change the canvas background when the button is clicked
let button = document.getElementById('button');

button.addEventListener('click', function(){
    // Choose a random color
    let color = getRandomHex();
    // Get the canvas
    let canvas = document.getElementById('canvas');

    canvas.style.background = color;
})

// Functions
 function getRandomHex() {
    return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
 }