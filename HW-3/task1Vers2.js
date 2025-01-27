const fs = require("fs").promises;
const path = require("path");

async function createRemoveFolders() {
  const folderPath = path.join(__dirname, "My folder");

  try {
    await fs.mkdir(folderPath);
    console.log(
      `The folder "My folder" | full path: '${folderPath}' | was succesfull created`
    );
    setTimeout(async () => {
      await fs.rmdir(folderPath);
      console.log(
        `The folder, full path: '${folderPath}' was succesfull removed`
      );
    }, 3000);
  } catch (err) {
    console.error("ERROR", err);
  }
}
createRemoveFolders();
