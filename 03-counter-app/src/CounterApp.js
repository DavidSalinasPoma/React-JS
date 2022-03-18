// Short cut (imr tab) 

// Crea un funcional components con proptypes
// Short cut (rafcp tab) 

import React, { useState } from 'react';
import PropTypes from 'prop-types'

// Componente
const CounterApp = ({ value = 10 }) => {

    // UseState retorna un arreglo[]
    const state = useState('David');
    console.log(state);

    const [counter, setCounter] = useState(value); // UseState retorna un arreglo[]


    // handleAdd incrementar
    const handleAdd = () => {
        setCounter(counter + 1)
        // setCounter((counter) => counter + 1)
    }
    // handleAdd decremento
    const handleAddDecremento = () => {
        setCounter(counter - 1)
    }
    // handleAdd Reset
    const handleAddReset = () => {
        setCounter((counter) => counter = value);
    }

    return (
        <>
            <React.StrictMode>
                <h1>CounterApp</h1>
                <h2> {counter} </h2>
                {/* <button onClick={(e) => { handleAdd(e) }}>+1</button> */}
                {/*De manera simplificada  */}
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleAddReset}>Reset</button>
                <button onClick={handleAddDecremento}>-1</button>
                {/* Crear un boton para incrementar un valor */}
            </React.StrictMode>
        </>
    )
}

// Obligando a mandar el argumento con su tipo especifico
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


export default CounterApp;

// Video 15