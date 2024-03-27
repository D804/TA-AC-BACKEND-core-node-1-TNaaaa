console.log('Welcome to Nodejs');
let os = require('os');
console.log(os.cpus(), os.freemem(), os.uptime()), os.version();
const { readFile, unlink } = require('fs');

const buff1 = Buffer.alloc(12);
console.log(buff1.toString);

let fs = require('fs');

const parse = require('parse');
let parsedUrl = parse(
  'https://airindia.com/fares/calculate?from=delhi&to=detroit'
);
console.log(parsedUrl.pathname, parsedUrl.protocol, parsedUrl.queryString);
