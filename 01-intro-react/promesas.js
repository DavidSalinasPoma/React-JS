
const promesa = (name)=>{

    return new Promise((resolve, reject) => {

       if (true) {
           resolve(
               {
                   name:'David',
                   lastName:'Salinas',
                   phone: 76931047
               }
               );
       } else {
           reject(`Soy una promesa reject ${name}`);
       }
        
    });
};

// Consumir una promesa
promesa('David').then(console.log)
.catch(err=>{
    console.warn(err);
})
