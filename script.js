function eshkere() {
    alert("ЕЩКЕРЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕ");
}
document.getElementById('pillButton').onclick = eshkere;

var audio = new Audio('assets/headshot.mp3');

document.getElementById('astolfo').addEventListener("click", function() {
  audio.play();
});
document.getElementById('aboutButton').addEventListener("click", function() {
  window.location.href = "/about";
});