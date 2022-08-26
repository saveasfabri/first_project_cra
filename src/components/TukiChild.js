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
    const decrease = () => {
        console.log("Ahora increase funciona");
        setCount(count - 1);
    };

    return (
        <div className="TukiChild">
            <h2>Tuki Child!</h2>
            <h3>Soy hijo de TukiComponents y nieto de App</h3>
            <p>Contador: <span>{count}</span> enjoy!</p>
            <div className="containerButtons">
                <Button className="btn" onClick={increase} variant="contained">Click and inrease</Button>
                <Button className="btn" onClick={decrease} variant="contained">Click and decrease</Button>
            </div>
            
        </div>
    );
};

export default TukiChild;
