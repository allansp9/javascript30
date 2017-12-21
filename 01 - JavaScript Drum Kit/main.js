function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }

  key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.toggle("pressed");
}

function removeTransition(e) {
  this.classList.remove("pressed");
}

const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
