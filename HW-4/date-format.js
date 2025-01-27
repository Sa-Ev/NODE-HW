const moment = require("moment/moment");
let count = 0;
const interval = setInterval(() => {
  const now = moment().format("YYYY-MM-DD HH:mm:ss");
  console.log(now);
  count++;
  if (count === 5) {
    clearInterval(interval);
    console.log("The game is over!");
  }
}, 1000);
