var hostname = "ws://" + window.location.hostname + ":9000";
var fortuneSocket = new WebSocket(hostname + "/fortunesocket");
var broadcastSocket = new WebSocket(hostname + "/broadcaststrings");

console.log("The hostname " + hostname);

var getFortune = function getFortune() {
  fortuneSocket.send("Here's some text that the server is eagerly awaiting!");
}

var broadcastMessage = function broadcastMessage() {
  var message = document.getElementById("message").value;
  broadcastSocket.send(message);
}

fortuneSocket.onmessage = function (event) {
  console.log(event);
  document.getElementById("fortune").innerHTML = event.data;
}
fortuneSocket.onopen = function (event) {
  console.log("Connection opened");
  console.log(event);
}
fortuneSocket.onerror = function (event) {
  console.log("Connection error");
  console.log(event);
}
fortuneSocket.onclose = function (event) {
  console.log("Connection closed");
  console.log(event);
}

broadcastSocket.onmessage = function (event) {
  console.log(event.data);
  var greeting = event.data;
  var li = document.createElement("li");
  var liText = document.createTextNode(greeting);
  li.appendChild(liText);
  document.getElementById("broadcast").appendChild(li);
}
broadcastSocket.onopen = function (event) {
  console.log("Connection opened");
  console.log(event);
}
broadcastSocket.onerror = function (event) {
  console.log("Connection error");
  console.log(event);
}
broadcastSocket.onclose = function (event) {
  console.log("Connection closed");
  console.log(event);
}

document.querySelector('.fortune').addEventListener('click', getFortune);
document.querySelector('.broadcast').addEventListener('click', broadcastMessage);
