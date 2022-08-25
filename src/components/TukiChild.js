import { useState } from "react";
import Button from '@mui/material/Button';


const TukiChild = () => {
    //Nuestro primer hook es el useState, el cual nos permite crear un estado en nuestro componente.
    // let contador = 0;
    const [count, setCount] = useState(0);

    console.log("count", count);
    console.log("TukiChild");

    const increase = () => {
        console.log("Ahora increase funciona");
        setCount(count + 1);
    };

    return (
        <div className="TukiChild">
            <h1>Tuki Child!</h1>
            <h2>Soy hijo de TukiComponents y nieto de App</h2>
            <h3>Contador: <span>{count}</span> enjoy!</h3>
            <Button className="btn" onClick={increase} variant="contained">Click Me</Button>
        </div>
    );
};

export default TukiChild;
