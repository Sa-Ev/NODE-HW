const fs = require("fs").promises;
async function writeReadFile() {
  try {
    await fs.mkdir("Taskfolder");
    await fs.writeFile("Taskfolder/info.txt", "Node.js is awesome!");
    await fs.readFile("Taskfolder/info.txt", "utf-8");
    const data = await fs.readFile("Taskfolder/info.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
writeReadFile();
