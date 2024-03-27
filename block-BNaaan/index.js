const http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  console.log(req.headers, req.method, req.url);

  res.end('Welcome to my website');
}

server.listen(3000, () => {
  console.log('Website Running on a local host 3000');
});
