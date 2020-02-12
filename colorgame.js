var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)"
];

var selectedColor = colors[3];
var square  = document.querySelectorAll(".square");
var rgbColor = document.getElementById("rgbColor");

rgbColor.textContent = selectedColor;

for(var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === selectedColor) {
            alert("Nice Job");
        } else {
            alert("Bad color");
        }
    });
}