// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {api} from '../../service/api';

export default function handler(req, res) {

  const listBairros = api.get('Imovel/RetornarImoveisDisponiveis', {
    params: {
      parametros: '{"finalidade":1,"numeroPagina":1,"numeroRegistros": 20}'
    }
  }).then(response => {

      res.status(200).json(response.data);

    })
    .catch(error => {

     console.log(error);
     res.status(400).json(error.data);
   
    })


}
