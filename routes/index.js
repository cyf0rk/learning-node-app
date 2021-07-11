const { getReadFile } = require('./readFile');

const router = (req, res) => {
  if (req.url === '/') {
    getReadFile('./views/index.html', res);
  } else if (req.url === '/api/crypto') {
    getReadFile('./views/crypto.html', res);
  } else {
    getReadFile('./views/404.html', res);
  }
};

module.exports = { router };
