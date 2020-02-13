var colors = randomAllRgb(6);

var selectedColor = randomColor();
var square  = document.querySelectorAll(".square");
var rgbColor = document.getElementById("rgbColor");
var message = document.getElementById("message");
var bgColor = document.getElementById("bgColor");

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
        bgColor.style.backgroundColor = selectedColor;
    }
}

function randomColor(random) {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomAllRgb(num) {
    var colors = [];
    for(var i = 0; i < num; i++) {
        allRgb()
        colors.push(allRgb());
    }
    return colors;
}

function allRgb(random) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}