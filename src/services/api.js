import axios from 'axios';

const api = axios.create({
  baseURL:
    'http://servicos.receita.fazenda.gov.br/Servicos/certidao/CndConjuntaInter',
});

export default api;
