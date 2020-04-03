import express from 'express';
import cors from 'cors';

import api from './services/api';

var app = express();

app.get('/', async function(req, res) {
  // const response = await api.get('https://atalhos-sma.firebaseapp.com/');

  const response = await api.get('/InformaNICertidao.asp?Tipo=1');

  res.json(response.data);
});

app.listen(3333);