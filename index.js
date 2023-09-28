// Import necessary modules
const express = require('express');
const next = require('next');

// Create a Next.js app
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // Define your routes here
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    // Start the server
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('Server is running on port 3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
