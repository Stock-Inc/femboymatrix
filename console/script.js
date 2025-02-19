function shake(){
  var g = (Math.random() - 0.5) * 2;
  document.getElementById('command').style.transform = "rotate(" + g + "deg)";
  setTimeout(function(){
    document.getElementById('command').style.transform = "rotate(0deg)";
  }, 500);
}

document.getElementById('command').addEventListener("keypress", shake)