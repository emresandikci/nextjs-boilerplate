const routes = require('next-routes');

module.exports = routes()
  .add({ name: 'home', pattern: '/', page: 'public/home' })
  .add({ name: 'about', pattern: '/about', page: 'public/about' });
