let fs = require('fs');
fs.readFile('./content.md', 'utf-8', (err, file) => {
  if (err) {
    console.error('Error :', err);
    return;
  }
  console.log(file);
});

2;

const fs = require('fs');

console.log('start');
function sum(a, b) {
  console.log('process');
  return a + b;
}
console.log('end');

3;
const fs = require('fs');

console.log('start');

function sum(a, b) {
  console.log('process');
  return a + b;
}

console.log('end');

4;
let buff1 = Buffer.alloc(10);
console.log(buff1);
buff1.write('Welcome to Buffer');
