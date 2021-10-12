const fs = require ('fs');
const { option } = require('process');
const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multipicar');
const argv = require('./config/yars')

const colors = require('colors');


console.clear();

//console.log(process.argv);

/*
const [ , ,arg3='Base=5'] = process.argv;
const [ ,base = 5  ] = arg3.split('=');
console.log(base);
*/

//console.log(process.argv);
//console.log(argv); 
//console.log('base: yargs', argv.base);
//const base = 3; 

 crearArchivo(argv.b,argv.l,argv.hasta)
 .then(nombrearchivo=> console.log(nombrearchivo.rainbow, 'creado'))
 .catch(err=> console.log(err));
