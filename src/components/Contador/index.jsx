import React, {useState, useEffect} from 'react';
import ComponenteEfeito from '../ComponenteEfeito/index'

const Contador = () => {
  const [count, setCount] = useState(10)

  const diminuirContador = () => {
    setCount(count - 1)
  }

  // useEffect(() => {
  //   setCount(count - 1)
  // }, [count])

  return (
    <div>
      <ComponenteEfeito contador={count} alterarContador={setCount}/>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <p>Clique</p>
      <button onClick={diminuirContador}>
        -
      </button>
    </div>
   );
}
 
export default Contador;