function shake(){
  let g = (Math.random() - 0.5) * 2;
  document.getElementById('command').style.transform = "rotate(" + g + "deg)";
  setTimeout(function(){
    document.getElementById('command').style.transform = "rotate(0deg)";
  }, 500);
}

const command = document.getElementById('command');

command.addEventListener("keypress", shake)

async function sendCommand (url, command) {
  let response = await fetch(url + new URLSearchParams({
    command: command
  }));
  return await response.text();
}

function outputLog(message){
  let table = document.getElementById("outputLog");
  let newLine = document.createElement("tr");
  let newOutput = document.createTextNode(message);

  newLine.appendChild(newOutput);
  table.appendChild(newLine);

  const inputLine = document.getElementById("inputLine");

  command.value = '';
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