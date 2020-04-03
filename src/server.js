// import 'dotenv/config';

// import express from 'express';
// import cors from 'cors';

// import api from './services/api';

var express = require('express');
var cors = require('cors');

var api = require('./services/api');

var app = express();

app.use(cors());

app.get('/', async function(req, res) {
  // const response = await api.get('https://atalhos-sma.firebaseapp.com/');

  const response = await api.get('/InformaNICertidao.asp?Tipo=1');

  res.json(response.data);
});

app.listen(process.env.PORT || 3333);
