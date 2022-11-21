import server from './server';

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`billet-sender_backend is running on port ${port}`);
});
