// Detecting the button clicks

var totalDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < totalDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click",
    function() {
      var buttonInnerHtml = this.innerHTML;
      makeSound(buttonInnerHtml);
      buttonPressed(buttonInnerHtml);
    }
  );
}
  // Detecting the keyboard press
    document.addEventListener("keypress", function(event) {
      makeSound(event.key);
      buttonPressed(event.key);
    }
  );

  // function to check and play the correct sound
  function makeSound(key) {
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;


      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;


      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      default:
        console.log(buttonInnerHtml);
    }
  }

function buttonPressed(pressedKey){
  var activeButton = document.querySelector("."+pressedKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
