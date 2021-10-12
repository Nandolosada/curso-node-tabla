//const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');
//const { resolve } = require('path/posix');
/*
const crearArchivo = (base = 5) => {
    // Con el Return new promesa
    return new  Promise((resolve,reject) => {
        console.log('======================');
        console.log('=====Tabla Del',base);
        console.log('======================');
        let salida = '';

        for(let i=1;i<=10;i++){
            salida += (`${base } * ${i} =  ${base*i}\n`);
        }

        console.log('salida');

        fs.writeFileSync(`Tabla-${base}.txt`,salida);

        resolve(`Tabla-${base}.txt`)
    });
}
 */
const crearArchivo = async(base = 5,listar = false,hasta =10 ) => {   
   try {
    
    
        let salida , consola = '';
        for(let i=1;i<=hasta;i++){
            salida += (`${base } X ${i} =  ${base*i}\n`);
            consola += (`${base } ${'x'.green} ${i} =  ${base*i}\n`);
        }           
    

        if (listar === true)  {
                console.log('======================'.green);
                console.log('=====Tabla Del',colors.blue(base));
                console.log('======================'.green);  
                console.log(consola);          
        }

        
        fs.writeFileSync(`./salida/Tabla-${base}.txt`,salida);

        return(`Tabla-${base}.txt`)

   } catch (err) {
        throw err;
   }

    
}

module.exports = {
    crearArchivo
}