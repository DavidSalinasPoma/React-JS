// Diferencia entre el async-await y las promesas


// 1.- Esto es una promesa y es asyncrono
const getImagenPromesa = () => {
    return new Promise((resolve, reject) => {
        resolve('Esto es una imagen: Promesa');
    });
}

getImagenPromesa().then(resp => {
    console.log(resp);
})


// 2.- Async siempre te devuelve una promesa
const getImagen = async () => {
    return 'Esto es una imagen: async-await';
}

getImagen().then(resp => {
    console.log(resp);
})

// 3.- Await debe estar dentro de un async y este async resuelve promesas de asyncronos a syncronos
const getImagenAwait = async () => {

    try {

        // Utilizar Api de GHIPHY
        const apiKey = 'pHKiHXHS6z9MjOmGLxYr22z8gPb95bqk';

        // Retorna una promesa de tipo RESPONSE
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json(); // destructuracion de objetos

        const { url } = data.images.original;

        // Utilizamos el DOM
        const img = document.createElement('img');

        img.src = url;

        document.body.append(img);

    } catch (error) {
        // Manejo del error
        console.log(error);
    }


}

getImagenAwait();
