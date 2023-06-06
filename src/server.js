// eslint-disable-next-line import/no-extraneous-dependencies
const Hapi = require('@hapi/hapi');
// eslint-disable-next-line no-unused-vars
const routes = require('./routes');

async function init() {
  const server = Hapi.server({
    port: 8000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
      security: false,
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
}

init();
