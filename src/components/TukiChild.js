import { useState } from "react";
import Button from '@mui/material/Button';


const TukiChild = () => {
  //Nuestro primer hook es el useState, el cual nos permite crear un estado en nuestro componente.
  // let contador = 0;
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  const [info,setInfo]=useState({name:'Fabri', Age:43});
  console.log('Info', info);
  const changeInfo = () => {
    setInfo ({...info, name:'Fabricio', lastName:'Hang'})
  }

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
      <div className="info">
      <p>Info: <span>{info}</span> enjoy!</p>
      <Button className="btn" onClick={changeInfo} variant="contained">Change info</Button>
      </div>
    </div>
  );
};

export default TukiChild;
