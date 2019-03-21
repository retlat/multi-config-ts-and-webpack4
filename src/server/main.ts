import express from 'express';

(async () => {
  const app = express();
  const port = 80;

  app.use(express.static('public'));
  app.get('/ping', (_req, res) => {
    setTimeout(() => { res.send('pong'); }, 500);
  });

  app.listen(port, () => {
    console.log('Server started');
  });
})();
