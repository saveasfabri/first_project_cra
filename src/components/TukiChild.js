import { useState } from "react";
import Button from '@mui/material/Button';


const TukiChild = () => {
  
  /* Ejercicio botón incrementa y botón decrementa */
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  /* Ejercicio Botón agrega y cambia  datos a objeto info */
  const [info,setInfo]=useState({name:'Fabri', Age:42});
  console.log('Info', info);
  const changeInfo = () => {
    setInfo ({...info, name:'Fabricio', lastName:'Hang'})
  }
  const infoInDom = (Object.values(info)).join(', ');

  /* Ejercicio botón cambia loading cada vez que se clickea */
  const [loading,setLoading]=useState(false);
  console.log(loading);
  const changeLoading = () => {
    setLoading (!loading);
  }

  /* Ejercicio bot[on agrega animales al array] */
  const [animals, setAnimals] = useState(['Raccoon']);
  const arrayAnimals = ['bear', 'eagle', 'rhino', 'cat', 'dog'];
  console.log('Animals', animals);
  const addAnimals = () => {
  /* Así validamos que una vez que clickeamos el boton agrgegará el
  segundo array sólo si hay un solo elemento en el array. La primera vez
  sí tiene un solo elemnto('Racoon') entonces lo agrega. Los siguientes 
   clicks no continuará agregando ya que va a tener 6 elementos */
  animals.length === 1 && setAnimals([...animals, ...arrayAnimals]);
  }
  const arrayAnimalsInDom = ([...animals]).join(', ')


  return (
    <div className="TukiChild">
      <h2>Tuki Child!</h2>
      <h3>Soy hijo de TukiComponents y nieto de App</h3>
      <div className="counter">
        <p>Contador: <span>{count}</span> enjoy!</p>
        <div className="containerButtons">
          <Button className="btn" onClick={increase} variant="contained">Click and inrease</Button>
          <Button className="btn" onClick={decrease} variant="contained">Click and decrease</Button>
        </div>
      </div>
      <div className="contExercise">
      <p>Info: <span>{infoInDom}</span></p>
      <Button className="btn" onClick={changeInfo} variant="contained">Change info</Button>
      </div>
      <div className="contExercise">
      <p>Loading: <span>{String(loading)}</span></p>
      <Button className="btn" onClick={changeLoading} variant="contained">Change Loading</Button>
      </div>
      <div className="contExercise">
      <p>Animals: <span>{arrayAnimalsInDom}</span></p>
      <Button className="btn" onClick={addAnimals} variant="contained">Add animals</Button>
      </div>
    </div>
  );
};

export default TukiChild;
