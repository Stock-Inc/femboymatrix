

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
  return await response.text();
}

function outputLog(message){
  var table = document.getElementById("outputLog");
  var newLine = document.createElement("tr");
  var newOutput = document.createTextNode(message);


  newLine.appendChild(newOutput);
  table.appendChild(newLine);

  const inputLine = document.getElementById("inputLine");

  table.insertRow(inputLine)
  table.scrollTop = table.scrollHeight;
}

command.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendCommand("https://api.femboymatrix.su/console?", command.value).then(function(data) {
      outputLog(data);

    });
  }
})