const dotenv = require('dotenv');
const { createServer, request } = require('http');
const fs = require('fs');

const env = dotenv.config().parsed;

const getReadFile = (filePath, response) => {
  fs.readFile(filePath, (err, pageRes) => {
    if (err) {
      response.writeHead(response.statusCode);
      console.log(`There was a problem, ${err}`);
    } else {
      response.writeHead(200);
      response.write(pageRes);
    }
    response.end();
  });
};

const server = createServer((req, res) => {
  if (req.url === '/api/crypto') {
    getReadFile('./pages/crypto.html', res);
  } else if (req.url === '/') {
    getReadFile('./pages/index.html', res);
  } else {
    getReadFile('./pages/404.html', res);
  }
});

server.on('uncaughtException', (error) => {
  console.log(`There was an uncaught error: ${error}`);
  process.exit(1);
});

server.listen(env.PORT, (error) => {
  error && console.log(`There was an error: ${error}`);
  console.log(
    `Server is litening on port ${env.PROTOCOL}://${env.HOSTNAME}:${env.PORT}`
  );
});
