const fs = require("fs").promises;
require("dotenv").config();
console.log(process.env.FILENAME);
const textfile = process.env.FILENAME;
async function writeReadFile() {
  try {
    await fs.writeFile(textfile, "Hello, world");
    const data = await fs.readFile(textfile, "utf8");
    console.log("file contents: ", data);
  } catch (error) {
    console.log("Error by reading");
  }
}
writeReadFile();
