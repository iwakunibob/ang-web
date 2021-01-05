var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var startFlag = false;

var audioBlue = document.querySelector('#blue');
var audioGreen = document.querySelector('#green');

audioBlue.play();
audioGreen.play();




// $(".btn").click(function() {
//   var userChosenColor = $(this).attr("id");
//   if (!startFlag) {
//     nextSequence();
//     startFlag = true;
//   } else {
//     userClickedPattern.push(userChosenColor);
//     playSound(userChosenColor);
//     animatePress(userChosenColor);
//     checkAnswer(userClickedPattern.length - 1);
//   }
// });

// function checkAnswer(currentLevel) { 
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//     console.log("success");
//     if (userClickedPattern.length === gamePattern.length) {
//       setTimeout(function() {
//         nextSequence();
//       }, 1000);
//     } 
//   } else {
//     console.log("wrong");
//     playSound("wrong");
//     $("body").addClass("game-over");
//     setTimeout(function() {
//       $("body").removeClass("game-over");
//     }, 600);
//     $("#level-title").text("Game Over, Press a Button to Restart");
//     restartGame(); 
//   }  
// }

// function nextSequence() {
//   userClickedPattern = [];
//   let randomNumber = Math.floor(Math.random() * 4);
//   let randomChosenColor = buttonColors[randomNumber];
//   gamePattern.push(randomChosenColor);
//   $("#level-title").text("Level " + level++);
//   $("#" + randomChosenColor).fadeIn(200).fadeOut(200).fadeIn(200);
//   playSound(randomChosenColor);
// }

// function playSound(name) {
//   let sound = new Audio("sounds/" + name + ".mp3");
//   sound.play();
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function() {
//     $("#" + currentColor).removeClass("pressed");
//   }, 200);
// }

// function restartGame() {
//   level = 0;
//   gamePattern = [];
//   startFlag = false;
// }
