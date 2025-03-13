const audio = new Audio('assets/headshot.mp3');

let count = 0;

// TODO: Replace destination
document.getElementById('pillButton').addEventListener("click", function() {
  window.location.href = "https://chat.femboymatrix.su/";
});

document.getElementById('astolfo').addEventListener("click", function() {
  count++;
  if (count === 3) {
    window.location.href = "/console";
    count = 0;
  }
  audio.play();
});

document.getElementById('aboutButton').addEventListener("click", function() {
  window.location.href = "/about";
});