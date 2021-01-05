// Drum Web Page by Robert Laurie
// Sound files and matching keys in order presented
var qtyDrumButtons = document.querySelectorAll(".drum").length;
var mp3FileNames = ["tom-1", "tom-2", "tom-3", "tom-4", "snare", "crash", "kick-bass"];
const KEYS = "wasdjkl";
var drumSounds = [];

let drum = document.getElementById("tom1");

drum.play();

// var loaded = 0;
// function loadedAudio() {
//     // this will be called every time an audio file is loaded
//     // we keep track of the loaded files vs the requested files
//     loaded++;
//     console.log(loaded + " audio files loaded!");
//     if (loaded == audioFiles.length){
//       // all have loaded
//       main();
//     }
// }
// function preloadsounds()
// {
//   $("#loader").show();
//   console.log(level.config);
//   audioFiles = level.config.soundfiles;

//   // we start preloading all the audio files with html audio
//   for (var i in audioFiles) {
//       preloadAudio(audioFiles[i]);
//   }

// }

// function preloadAudio(url)
// {
//   console.log("trying to preload "+ url);
//   var audio = new Audio();
//   // once this file loads, it will call loadedAudio()
//   // the file will be kept by the browser as cache
//   audio.addEventListener('canplaythrough', loadedAudio, false);

//   audio.addEventListener('error', function failed(e)
//   {
//     console.log("COULD NOT LOAD AUDIO");
//     $("#NETWORKERROR").show();
//   });
//   audio.src = url;
// }

// // Button press listener
// for(let i = 0; i < qtyDrumButtons; i++ ) {
//   drumSounds[i] = new Audio("sounds/" + mp3FileNames[i] + ".mp3");
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () { 
//     makeSound(this.innerText)
//   }); 
// }

// // Keyboard key down listener
// document.addEventListener("keydown", function(e){ 
//   makeSound(e.key);
// });

// // Play correct sound
// function makeSound(key) {
//   let n = KEYS.indexOf(key)
//   if(n >= 0) {
//     buttonAnimation(key)
//     let sound = new Audio("sounds/" + mp3FileNames[n] + ".mp3");
//     sound.play();
//   }
// }

// function buttonAnimation(currentKey) {
//   let activeButton = document.querySelector("." + currentKey);
//   activeButton.classList.add("pressed");
//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 150);
// }
