/*
Q. Create a basic server using http's createServer
  - listen for request on port 5000
  - console request and response object
  - do a request using browser on `localhost:5000`
  - check out console for request and response object
*/
let http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  console.log(req, res);
}

server.listen(5000, () => {
  console.log('Hosted on localhost 5000');
});

/* Q. create a node server 
  - add listener on port 5100
  - respond with 'My first server in NodeJS' using response object
  */
let http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  res.end('My first server in NodeJS');
}
server.listen(5100, () => {
  console.log('Host on 5100 port');
});
/*write code to create a node server 
  - add listener on port 5555
  - console request headers
  - respond with content of user-agent from request headers.
*/
let http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  console.log(req);
  res.end('user-agent from request headers');
}
server.listen(5555, () => {
  console.log('Starting on port');
});
/* Q. write code to create a node server 
  - add listener on port 5566
  - console request url and request method
  - return a text response with requested url and method
  */
let http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  console.log(req.url, res);
}
server.listen(5566, () => {
  console.log('Running on port 5566');
});
/* write code to create a node server 
 - add listener on port 7000
 - also add a callback function to listener with a console `server listening on port 7000`
- return entire request headers in response.*/

let http = require('https');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  req.end(res);
}
server.listen(7000, () => {
  console.log('listening on port 7000');
});
/*
create a server
- add a listener on port 3333
- set status code 202 in response using `res.statusCode`.
*/
let http = require('http');
let server = http.createServer(handleServer);
function server(req, res) {
  req.statusCode = 202;
  res.end(res.statusCode);
}
server.listen(3333, () => {
  console.log('Request on code 333');
});
/*
Q. create a server 
  - add a listener on port 8000
  - set appropriate header for html response using `res.setHeader`
  - return an HTML response(`<h3>Welcome to altcampus</h3>`) 
  */
let http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  res.setHeader('ContentType', 'plain/html');
  res.end(`<h3>Welcome to altcampus</h3>`);
}
server.listen(8000, () => {
  console.log('Request on 8000');
});

// Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.
let http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  res.writeHead('ContentType', 'plain/html');
  res.end(`<h3>Welcome to altcampus</h3>`);
}
server.listen(8000, () => {
  console.log('Request on 8000');
});
/*
Q. create a basic node server
  - add a listener at port 8888
  - add appropriate header for json response
  - send json response({success: true, message: 'Welcome to Nodejs'})
  */
let http = require('http');
let server = http.createServer(handleServer);
function handleServer(req, res) {
  res.end('Good response');
}
server.listen(8888, () => {});
