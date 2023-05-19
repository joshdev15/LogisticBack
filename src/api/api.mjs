import express from 'express';
const app = express();

// let users = [];
// let shipments = [];

const basePath = 'api';

// GETS
app.get('/', (_, res) => {
  console.log(`GET - Welcome to LogisticBack - ${new Date().toDateString()}`);
  res.set('Content-Type', 'application/json');
  res.status(200).send(
    JSON.stringify({
      msg: 'LogisticBack is Connected',
    }),
  );
});

app.get(`/${basePath}/fakeauth`, async (_, res) => {
  console.log(`GET - /error - ${new Date().toDateString()}`);
  res.header('Access-Control-Allow-Origin', '*');
  res.set('Content-Type', 'application/json');
  res.status(200).send(
    JSON.stringify({
      auth: true,
    }),
  );
});

app.get(`/${basePath}/error`, async (_, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  console.log(`GET - /error - ${new Date().toDateString()}`);
  res.set('Content-Type', 'application/json');
  res.status(500).send(
    JSON.stringify({
      error: 'Error intencional',
    }),
  );
});

export default {
  app,
};
