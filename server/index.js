const next = require('next');
const routes = require('./routes');
const express = require('express');
const os =require('os');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

const PORT = process.env.PORT || 5000;

app.prepare().then(() => {
  const server = express();

  //https://expressjs.com/en/advanced/best-practice-security.html
  server.disable('x-powered-by');

  server.use('/', express.static('./src/public'));

  server.get('*', (req, res) => {
    return handler(req, res);
  });

  server.listen(PORT, error => {
    if (error) throw error;
    console.log(`>${process.env.NODE_ENV} mode Ready on http://localhost:${PORT}`);
    console.log(`>${process.env.NODE_ENV} mode Ready on http://localhost:${PORT} || http://${getLocalExternalIP()}:${PORT}`);
  });
});


const getLocalExternalIP = () => [].concat(...Object.values(os.networkInterfaces()))
  .filter(details => details.family === 'IPv4' && !details.internal)
  .pop().address
