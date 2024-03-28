const http = require('http');
let fs = require('fs');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  if (req.method === 'GET' && req.url === '/file') {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./node.html', (err, content) => {
      if (err) {
        console.log(err);
      } else {
        res.end(content);
      }
    });
    fs.createReadStream('./node.html'), pipe(res);
  }
}
server.listen(5555, () => {
  console.log('Request on localhost 5555');
});
