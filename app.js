const express = require('express');
const bodyParser = require('body-parser');
const bankRoutes = require('./routes/bankRoutes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use('/api/banks', bankRoutes);

let port = process.env.PORT || 5002;

app
  .listen(port, () => console.log('Connected to', port))
