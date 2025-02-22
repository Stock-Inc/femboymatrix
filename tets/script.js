var i = 0
function cloneRow() {
    var table = document.getElementById("tracklist");
    i++;
    var newLine = document.createElement("tr");
    var newOutput = document.createTextNode(i)
    newLine.appendChild(newOutput)
    table.appendChild(newLine)

    const button = document.getElementById("asd")

    document.body.insertBefore(table, button)
}