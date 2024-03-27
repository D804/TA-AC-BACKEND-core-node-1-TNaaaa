const http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  console.log(req.url);
  res.writeHead(201, { 'Content-Type': 'text/html' });
  res.write('Hello');
  res.write('Welcome to my');
  res.end('<h5>Website<h5>');
}
server.listen(4444, () => {
  console.log('Running on 4444 localhost');
});
