const audio = new Audio('assets/headshot.mp3');

// TODO: Replace destination
document.getElementById('pillButton').addEventListener("click", function() {
  window.location.href = "/console";
});

document.getElementById('astolfo').addEventListener("click", function() {
  audio.play();
});

document.getElementById('aboutButton').addEventListener("click", function() {
  window.location.href = "/about";
});