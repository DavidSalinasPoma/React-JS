
// Utilizar Api de GHIPHY
const apiKey = 'pHKiHXHS6z9MjOmGLxYr22z8gPb95bqk';


// Retorna una promesa
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


// 1.- Un primer ejemplo para hacer
// peticion.then(resp=>{
//     // Esta peticion retorna body (ReadbleStream) que no esta abierta todavia
//     // Para obtener la informacion se debe usar otra Promesa
//     // json() resuelve lo que viene en la promesa de BODY
//     resp.json().then(data=>{
//         console.log(data);
//     })
// })
// .catch(err=>{
//     console.log(err);
// });

// 2.- Otra forma de obtener los datos es un codigo mas limpio
peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        // Extraemos la url de la peticion 
        const { url } = data.images.original;

        // Utilizamos el DOM
        const img = document.createElement('img');

        img.src = url;

        document.body.append(img);

    })
    .catch(err => {
        console.log(err);
    })