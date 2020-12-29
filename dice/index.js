var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var diceNum1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", diceNum1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var diceNum2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", diceNum2);

if(diceNum1 > diceNum2)
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
else if (diceNum1 < diceNum2)
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
else
  document.querySelector("h1").innerHTML="👨🏻‍💻 Draw! 👩🏻‍💻";
