let http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.end('Welcome to homepage');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('<h2>This is all about nodeJS</h2>');
  } else if (req.method === 'POST' && req.url === '/about') {
    res.end('This is a post request');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h3>Page not found </h3>');
  }
}
server.listen(5000, () => {
  console.log(`localhost on 5k port`);
});
