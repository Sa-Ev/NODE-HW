const fs = require("fs");

fs.mkdir("My folder", function (err, data) {
  if (err) {
    return console.error(err);
  }
});
console.log("The folder was succesfull created");

setTimeout(() => {
  fs.rmdir("My folder", function (err) {
    if (err) {
      console.log("Error by remove folder");
      return;
    }
  });
  console.log("The folder was succesfull removed");
}, 3000);
