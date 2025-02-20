

function shake(){
  var g = (Math.random() - 0.5) * 2;
  document.getElementById('command').style.transform = "rotate(" + g + "deg)";
  setTimeout(function(){
    document.getElementById('command').style.transform = "rotate(0deg)";
  }, 500);
}

var command = document.getElementById('command');

command.addEventListener("keypress", shake)

async function sendCommand (url, command) {
  let response = await fetch(url + new URLSearchParams({
    command: command
  }));
  let data = await response.text();
  return data;
}

command.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendCommand("https://api.femboymatrix.su/console?", command.value).then(function(data) {
      console.log(data);
    });
  }
})