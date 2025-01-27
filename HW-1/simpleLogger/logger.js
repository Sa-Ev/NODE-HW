const fs = require("fs");

function logMessage(message) {
  const timepoint = new Date().toISOString().split(".")[0].replace("T", " ");
  const editLog = `${timepoint}: ${message}\n`;

  fs.appendFile("./simpleLogger/log.txt", editLog, (err) => {
    if (err) {
      console.error("Error:", err);
      return;
    }
    console.log("Message is created");
  });
}

module.exports = { logMessage };
