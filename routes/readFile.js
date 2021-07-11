const fs = require('fs');

const getReadFile = (filePath, response) => {
  fs.readFile(filePath, (error, pageRes) => {
    if (error) {
      response.writeHead(response.statusCode);
      console.log(error);
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(pageRes);
    }
    response.end(() => {});
  });
};

module.exports = { getReadFile };
