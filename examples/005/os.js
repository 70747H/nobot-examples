const os = require('os');

const homeDirectory = os.homedir();
console.log(`Your home directory is: ${homeDirectory}`);

const osPlatform = os.platform();
console.log(`The OS platform is ${osPlatform}`);

const cpuCores = os.cpus();
const coresCount = cpuCores.length;
const cpuModel = cpuCores[0].model;
const cpuSpeed = cpuCores[0].speed;
const cpuTimes = cpuCores[0].times;
console.log(`I can see your ${cpuModel} has ${coresCount}, also ${cpuSpeed}`);
