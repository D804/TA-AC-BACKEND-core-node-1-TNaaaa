const http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  res.end('<h1>Welcome to my page<h1>');
}

server.listen(4000, () => {
  console.log('Welcome to my server');
});
