const fs = require("fs");
const chalk = require("chalk");

global.owner = ["6283841350073"];
global.author = "AKBAR STORE";
global.packname = "Push-boker hamil 🤰";
global.sessionName = "Bot-BOKER ARAB";
global.versionbot = "1.2.0";
global.mess = {
    wait: "Loading...",
    success: "Operation Sucessfull!",
    owner: "Fitur Khusus Owner Bot",
    waitdata: "Melihat Data Terkini...",
    admin: "Fitur Khusus Admin Group!",
    private: "Fitur Khusus Private Chat!",
    group: "Fitur Digunakan Hanya Untuk Group!",
    botAdmin: "Bot Harus Menjadi Admin Terlebih Dahulu!",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
