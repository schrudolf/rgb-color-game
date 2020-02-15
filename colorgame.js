var squareNumber = 6;
var colors = randomAllRgb(squareNumber);
var selectedColor = randomColor();
var square  = $(".square");

$("#easyBtn").click(function(){
    $("#easyBtn").addClass("selected");
    $("#hardBtn").removeClass("selected");
    squareNumber = 3;
    colors = randomAllRgb(squareNumber);
    selectedColor = randomColor();
    $("#rgbColor").text(selectedColor);
    for(var i = 0; i < square.length; i++){
        if(colors[i]) {
        square[i].style.backgroundColor = colors[i];
        } else {
            square[i].style.display = "none";
        }
        $("#bgColor").css("background", "steelblue");
    }   
})

$("#hardBtn").click(function(){
    $("#hardBtn").addClass("selected");
    $("#easyBtn").removeClass("selected");
    squareNumber = 6;
    colors = randomAllRgb(squareNumber);
    selectedColor = randomColor();
    $("#rgbColor").text(selectedColor);
    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = colors[i];
        square[i].style.display = "block";
    }
    $("#bgColor").css("background", "steelblue");
})

$("#reset").click(function() {
    colors = randomAllRgb(squareNumber);
    selectedColor = randomColor();
    $("#rgbColor").text(selectedColor);
    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = colors[i];
    }
    $("#bgColor").css("background", "steelblue");
    $("#message").text("Good Luck!");
    $("#message").css("color", "#EE82EE");
    $("#reset").text("New Colors");
});

$("#rgbColor").text(selectedColor);

for(var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === selectedColor) {
            $("#message").text("Correct!");
            $("#message").css("color", "#32CD32");
            $("#reset").text("Play again");
            changeColors();
        } else {
            this.style.backgroundColor = "#232323";
            $("#message").text("Wrong Color!");
            $("#message").css("color", "#FF4500");
        }
    });
}

function changeColors() {
    for(var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = selectedColor;
        $("#bgColor").css("background", selectedColor);
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