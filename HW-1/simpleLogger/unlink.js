const fs = require("fs");
fs.unlink("./log.txt", () => {
  return;
});
