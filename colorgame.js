var squareNumber = 6;
var colors = randomAllRgb(squareNumber);
var selectedColor = randomColor();
var square  = document.querySelectorAll(".square");
var rgbColor = document.getElementById("rgbColor");
var message = document.getElementById("message");
var bgColor = document.getElementById("bgColor");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn"); 
var hardBtn = document.getElementById("hardBtn"); 

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    squareNumber = 3;
    colors = randomAllRgb(squareNumber);
    selectedColor = randomColor();
    rgbColor.textContent = selectedColor;
    for(var i = 0; i < square.length; i++){
        if(colors[i]) {
        square[i].style.backgroundColor = colors[i];
        } else {
            square[i].style.display = "none";
        }
    }   
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    squareNumber = 6;
    colors = randomAllRgb(squareNumber);
    selectedColor = randomColor();
    rgbColor.textContent = selectedColor;
    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = colors[i];
        square[i].style.display = "block";
    }
})

resetButton.addEventListener("click", function() {
    colors = randomAllRgb(squareNumber);
    selectedColor = randomColor();
    rgbColor.textContent = selectedColor;
    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = colors[i];
    }
    bgColor.style.backgroundColor = "#232323";
});

rgbColor.textContent = selectedColor;

for(var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === selectedColor) {
            message.textContent = "Correct!";
            resetButton.textContent = "Play again?";
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
        colors.push(allRgb());
    }
    return colors;
}

function allRgb() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}