var numSquares = 6;
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 0, 255)",
  "rgb(255, 225, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(0, 255, 0)",
];
var pickedColor = colors[3];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to square 
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    alert("option was clicked");
  });
}
