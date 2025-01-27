const fs = require("fs");
fs.mkdir("Taskfolder", (err) => {
  if (err) {
    console.error("Error by creating folder", err);
    return;
  }
  console.log("The folder was succesfull created");
});

// setTimeout(() => {
fs.writeFile("Taskfolder/info.txt", "Node.js is awesome!", (err) => {
  if (err) {
    console.error("Error by creating file", err);
    return;
  }
  console.log("The File was succesfull created");
});

fs.readFile("Taskfolder/info.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error occured when reading file:", err);
    return;
  }
  console.log(data);
});
// }, 1000);
