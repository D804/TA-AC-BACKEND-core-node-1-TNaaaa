let { readFile } = require('fs');
readFile('./create.md', 'utf-8', (err, file) => {
  console.log(file);
});

2;
let result = readFileSync('./content.md', 'utf8');

3;
let { readFile } = require('fs');
readFile('./create.md', 'utf-8', (err, file) => {
  console.log(file);
});

4;
let buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write('Welcome to Buffer');
