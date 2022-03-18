import React from 'react';
import ReactDom from 'react-dom';

// Nuestro primer componente
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

// Utilizando el css
import './index.css';

const divRoot = document.querySelector('#root');

// React Dom crea arbol de componentes y tambien permite la comunicacion entre componentes de una manera censilla
ReactDom.render(<CounterApp value={10} />, divRoot); // Comunicacion entre componentes

