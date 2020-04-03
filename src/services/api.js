// import axios from 'axios';

var axios = require('axios');

const api = axios.create({
  baseURL:
    'http://servicos.receita.fazenda.gov.br/Servicos/certidao/CndConjuntaInter',
});

module.exports = api;
// export default api;
