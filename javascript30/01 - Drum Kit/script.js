var key = document.getElementsByClassName("key");

key[0].addEventListener("keypress", function(event) {
    if (event.keyCode === 65) {
    key[0].classList.add(playing);
  }
});

window.addEventListener("keydown", function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  document.querySelector()
 }
);
