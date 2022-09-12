import React from 'react'
import '../../components/Componentes.css'

const PrimeiroComponente = ({qualquerNome}) => {

  //JS

  return (
    <div className="containerPrimeiroComponente">
      <h1>Preencha o formulário</h1>
      <label>{qualquerNome}</label>
      <input type="text"/>
    </div>
  )
}

export default PrimeiroComponente
