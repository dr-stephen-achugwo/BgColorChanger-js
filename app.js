//Select 13 colors - Primary, Secondary and Terciary Colors
let colors = [ 'red', 'green', 'blue', 'orange', 'purple', 'yellow', 'silver', 'violet', 'pink', 'gold', 'navy', 'cyan', 'magenta'];

//to change the  canvas background when the button is clicked
let button = document.getElementById('button');

button.addEventListener('click', function(){
    //choose a random number between 0 - 6
    let index = parseInt((Math.random()*colors.length)+1);
    //make the canvas
    let canvas = document.getElementById('canvas');

    canvas.style.background = `${colors[index]}`
})