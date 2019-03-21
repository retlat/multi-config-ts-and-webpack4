import express from 'express';

(async () => {
  const app = express();
  const port = 80;

  app.use(express.static('public'));
  app.get('/ping', (_req, res) => { res.send('pong'); });

  app.listen(port, () => {
    console.log('Server started');
  });
})();
