// Esto es un componente

// En react existen dos tipos de componentes
// Los que estan basados en clases y funciones


// Short cut (imr tab)
import React from 'react';
import PropTypes from 'prop-types'
// import React, { Fragment } from 'react';

// Esto es una funcional component
const PrimeraApp = ({ saludo, subtitulo }) => {



    // Imprimir arreglos y objetos
    // const arreglo = [1, 2, 3, 4, 5, 6];
    // const objeto = {
    //     nombre: 'David',
    //     apellido: 'Salinas'
    // }

    return (
        <>
            {/* <h1>{arreglo}</h1> */}
            {/* Json convierte el objetoen cadena o en json */}
            {/* <pre>{JSON.stringify(objeto, null, 3)}</pre> */}
            <h1>Hola mundo</h1>
            <p>Mi primera aplicación</p>
            <h2>{saludo}</h2>
            <h2>{subtitulo}</h2>
        </>
    );

}

// Obligando a mandar el argumento con su tipo especifico
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

// ShortCust exp tab
export default PrimeraApp;