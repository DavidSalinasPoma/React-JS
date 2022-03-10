
// Desestruturacion de arreglos

// 1.- Primer ejemplo
const personajes = ['Goku', 'Vegeta', 'Trunks'];
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

// 2.- Otra metodo de hacer lo anterior (F2 para cambiar referencias)
const [, , p3] = personajes;
console.log(p3); // imprime Trunks


// 3.- Tercer metodo de manejo de desestructuracion de arreglos
const retornoArreglos = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornoArreglos();
console.log(letras, numeros);


// 4.- Tarea de la clase
const useState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }]
}

const [names, setNombre] = useState('David');

console.log(names);
setNombre();
