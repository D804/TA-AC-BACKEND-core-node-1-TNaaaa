let os = require('os');
console.log('Welcome to Nodejs');

const cpu = os.cpus().length;
const freeMem = os.freemem();
const uptime = os.uptime();
const version = os.version();

console.log(cpus, freemem, uptime, version);
const { readFile, unlink } = require('fs');

const buff1 = Buffer.alloc(12);
buff1.wwrite('Welcome to node Js');
console.log(buff1.toString());

let { readFile, readFileSync } = require('fs');
let syncFile = readFileSync('./app.js');
console.log(syncFile);
let Async = readFile('./app.js', (err, content) => {
  console.log(err, content.toString());
});
