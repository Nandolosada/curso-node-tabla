const argv = require('yargs')
    .option('b',{
        alias : 'base',
        type  : 'number',
        demandOption: true,
        describe : 'Es la base de la tabla de Multiplicar'
    })
    .option('l',{
        alias : 'listar',
        type  : 'boolean',
        default : 'false',
        describe : 'Muestra la tabla en consola'
    })  
    .option('h',{
        alias: 'hasta',
        type :  'number',
        default : 10,
        describe : 'Establece desde el 1 hasta que iteracion va a imprimir las tablas de multiplicar'
    })   
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un Numero'
        }
        if(isNaN(argv.h)){
            throw 'La base tiene que ser un Numero'
        }
        return true;
    })                                           
    .argv;

    module.exports = argv;