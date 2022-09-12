import React, {useEffect, useState} from 'react'
import '../../components/Componentes.css'


const ComponenteDinamico = () => {
  const [ativado, setAtivado] = useState(false)

  //&& = 'and'
  //? true : false
  const data = [
    {
      nome: 'João',
      idade: 40,
      altura: '1.80'
    },
    {
      nome: 'Maria',
      idade: 20,
      altura: '1.60'
    },
    {
      nome: 'Felipe',
      idade: 25,
      altura: '1.73'
    }
  ]

  const nome = ativado ? 'Gui' : 'Guilherme' //if ternário fazendo atribuição de variáveis

  if (nome == 'Gui'){
    alert('O botão está ativado')
  } else alert('O botão está desativado')

  console.log('data', data)

  return (
    <div>
      <h1>{nome}</h1>
      {ativado ? data.map(pessoa => {
        return (
          <div className="containerDinamico">
            <p>Seu nome é: {pessoa.nome}</p>
            <p>Sua idade é: {pessoa.idade}</p>
            <p>Sua altura é: {pessoa.altura}</p>
          </div>
        )
      })
      : <h1>O botão está como desativado</h1>
      }
      <button onClick={() => setAtivado(!ativado)}>Mostrar Lista</button>
    </div>
  )
}

export default ComponenteDinamico
