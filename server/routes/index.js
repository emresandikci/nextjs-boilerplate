const routes = require('next-routes');
const urls = require('./urls');
const routeDefinitions = routes();

let routeNames = {};

Object.entries(urls).forEach(function ([key, value]) {
  routeDefinitions.add({ name: value.name, pattern: value.pattern, page: value.page });
  Object.defineProperty(routeNames, key, {
    value: {
      name: value.name,
      path: value.pattern,
      absoluteUrl: `${process.env.EB_BASE_ROUTE}${value.pattern}`,
    },
  });
});

routeDefinitions.Routes = routeNames;

module.exports = routeDefinitions;
