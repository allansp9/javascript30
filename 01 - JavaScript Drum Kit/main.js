(function() {
  window.addEventListener("keyup", e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  });
})();
