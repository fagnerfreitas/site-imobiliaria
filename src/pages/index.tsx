
import { GetServerSideProps, GetStaticProps } from 'next';

import styles from './styles.module.scss';

import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import { types } from 'util';

import { api } from '../service/api';
import { apiBack } from '../service/api';

import { Carrossel } from '../components/carrossel';
import { BannerCallToAction } from '../components/bannerCallToAction';
import { DestaqueBairros } from '../components/destaqueBairros';


export default function Home({ imoveis }) {

  const [bairros, setBairros] = useState([]);

  const handlerBairros = (list) => {
    setBairros(list)
  }

  async function getbairros() {

    const listBairros = apiBack.get('api/imoveis', {
      params: {
        parametros: '{"finalidade":1,"numeroPagina":1,"numeroRegistros": 8}'
      }
    }).then(response => {

      const { lista } = response.data;
     

    })
      .catch(error => {
        console.log(error.data);
      })
  }

  useEffect(() => {

    getbairros();

  }, []);

  return (
    <>
      <Head>
        <title>Home | DEV.</title>

        {/* CONFIGURAÇÕES DE COMPARTILHAMENTO DE LINK */}

        <meta property="og:title" content="Dev. | Template Next" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Template configurado Next.js!" />
        <meta property="og:url" content="dev." />
        <meta property="og:image" content="#" />

        <meta name="description" content="Template configurado Next.js" />
        <meta name="robots" content="index" />
      </Head>

      <div className={styles.banner}>

        <h1>Imobiliária 100% Belo Horizonte</h1>
        <p>Alugue ou compre seu imóvel sem drama</p>

        <div className={styles.containerBusca}>

          <div className={styles.containerInput}>
            <label>Endereço</label>
            <input className={styles.inputEndereco} placeholder="Busque por endereço" />
          </div>

          <div className={styles.containerInput}>
            <label>Quartos</label>
            <input className={styles.inputEndereco} placeholder="" />
          </div>

          <div className={styles.containerInput}>
            <label>Vagas</label>
            <input className={styles.inputEndereco} placeholder="" />
          </div>
        </div>
        <button>Buscar</button>
      </div>

      <Carrossel imoveis={imoveis} />

      <BannerCallToAction/>

      <DestaqueBairros/>

    </>
  )
}


/*
* Para executar funções backend antes de carregar a página
* Indicados para dados dinamicos
*/

export const getServerSideProps: GetServerSideProps = async () => {

  const properties = await api.get('Imovel/RetornarImoveisDisponiveis', {
    params: {
      parametros: '{"finalidade":1,"numeroPagina":1,"numeroRegistros": 20}'
    }
  })


  // .then(response => {
  //   const {lista} = response.data;
  //     lista.map(imovel => {
  //       console.log(imovel.titulo);
  //     })
  // })
  //.catch(error => {
  //  console.log(error.data);
  //})

  return {
    props: {
      imoveis: properties.data.lista
    },

  }
}


/*
* STATIC SITE GENERATION
* GetStaticProps - Para gerar páginas estáticas
*
* - Não indicado para paraginas dinamicas
*/

// export const getStaticProps: GetStaticProps = async () =>{

//   const properties = api.get('/Imovel/RetornarImoveisDisponiveis',{
//     params: {
//       "finalidade":"1",
//       "numeroPagina":"1",
//       "numeroRegistros":"8"},
//   }).then(response => {
//     console.log(response)
//  })
//  .catch(error => {
//       console.log(error)
//  })


//   return{
//     props:{},
//     revalidate: 60 * 60 * 24 //24 horas
//   }
// }



