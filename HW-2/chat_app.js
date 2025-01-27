const EventEmitter = require("events");
const chatEmitter = new EventEmitter();

chatEmitter.on("message", (data) => {
  const { username, text, timestamp } = data;
  console.log(`-${timestamp}- ${username}: ${text}`);
});

function sendMessage(username, message, emitter) {
  emitter.emit("message", {
    username: username,
    text: message,
    timestamp: new Date().toLocaleTimeString(),
  });
}

sendMessage("Alex", "Hello, friends!", chatEmitter);
sendMessage("Max", "Hello, Alex!", chatEmitter);
sendMessage("Kate", "How are you?", chatEmitter);
sendMessage("Alex", "Thank's, great!", chatEmitter);
