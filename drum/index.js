// Drum Web Page by Robert Laurie
// Sound files and matching keys in order presented
var qtyDrumButtons = document.querySelectorAll(".drum").length;
var mp3FileNames = ["tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3", "snare.mp3", "crash.mp3", "kick-bass.mp3"];
const KEYS = "wasdjkl";

// Button press listener
for(let i = 0; i < qtyDrumButtons; i++ ) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () { 
    makeSound(this.innerText)
  }); 
}

// Keyboard key down listener
document.addEventListener("keydown", function(e){ 
  makeSound(e.key);
});

// Play correct sound
function makeSound(key) {
  let n = KEYS.indexOf(key)
  if(n >= 0) {
    buttonAnimation(key)
    let sound = new Audio("sounds/" + mp3FileNames[n]);
    sound.play();
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 150);
}
