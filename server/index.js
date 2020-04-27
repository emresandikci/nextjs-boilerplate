const next = require('next');
const routes = require('./routes');
const express = require('express');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use('/', express.static('./src/public'));

  server.get('*', (req, res) => {
    return handler(req, res);
  });

  server.listen(PORT, error => {
    if (error) throw error;
    console.log(`>${process.env.NODE_ENV} mode Ready on http://localhost:${PORT}`);
  });
});
