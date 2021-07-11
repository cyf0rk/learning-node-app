require('dotenv').config();
const { createServer } = require('http');
const { router } = require('./routes/index');

const port = process.env.PORT || 5000;

const server = createServer((req, res) => {
  router(req, res);
});

server.listen(port, (error) => {
  error && console.log(`There was an error: ${error}`);
  console.log(`Server is litening on port ${port}`);
});
