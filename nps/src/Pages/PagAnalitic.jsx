import React from 'react'
import ListView from '../Components/ListView'

const PagAnalitic = () => {

  const columns = [{
    id: 'id',
    value: 'Cliente'
  }, {
    id: 'Nota_NPS',
    value: 'Nota do NPS'
  },{
    id: 'Classificacao',
    value: 'Classificação'
  },{
    id: 'pergunta_1',
    value: 'Pergunta 1'
  },{
    id: 'pergunta_2',
    value: 'Pergunta 2'
  },{
    id: 'pergunta_3',
    value: 'Pergunta 3'
  },{
    id: 'pergunta_4',
    value: 'Pergunta 4'
  },{
    id: 'pergunta_5',
    value: 'Pergunta 5'
  }];

  return(
    <ListView columns={columns} endpoint='/cliente' title="Analítico da resposta do NPS"  />
   );
  };


export default PagAnalitic;