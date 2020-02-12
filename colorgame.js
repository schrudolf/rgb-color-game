var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)"
];

var selectedColor = randomColor();
var square  = document.querySelectorAll(".square");
var rgbColor = document.getElementById("rgbColor");
var message = document.getElementById("message");

rgbColor.textContent = selectedColor;

for(var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === selectedColor) {
            message.textContent = "Correct!";
            changeColors();
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Wrong Color!";
        }
    });
}

function changeColors() {
    for(var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = selectedColor;
    }
}

function randomColor(random) {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}