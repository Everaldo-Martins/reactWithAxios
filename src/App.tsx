import { useCallback, useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import r2d2 from './assets/r2-d2.gif';
/*
interface Advice{
  id: number;
  advice: string;
}
*/
function App() {

  //const [nome, setNome] = useState<String>();
  const [personagem, setPersonagem] = useState<any>();

  const getData = useCallback( async()=> {
    await axios.get('https://swapi.py4e.com/api/people/3')
    .then(function (response) {
      console.log(response.data);
    setPersonagem(response.data);
    })
    .catch(function (error) {
      console.error(error);
    })
  }, [])

  useEffect(()=>{
    getData();
  }, [])
  /*
  const defName = (nome: string) => {
    setNome(nome);
  }
  */
  return (
    <>
      <div>
        <img src={r2d2} className="r2d2" alt="R2-D2" />
        <h2 className='personagem'>{ personagem && personagem.name }</h2>
      </div>
    </>    
  )
}

export default App
