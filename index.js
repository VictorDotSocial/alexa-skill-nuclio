const express = require('express');
const ngrok = require('ngrok');
const alexaRouter = require('./routes/alexaRoutes');

const app = express();

const port = 3000;

app.use('/alexa', alexaRouter);

app.listen(port, async() => {
  console.log('Esto funciona');
  const url = await ngrok.connect(port);
  console.log(url);
});