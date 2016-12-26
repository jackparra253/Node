var fs = require('fs');

// fs.readFile('./archivo1.txt',function(error, datos){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(datos.toString());
//     }
// });

var leer = function(error,datos)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(datos.toString());
    }
}

fs.readFile('./archivo1.txt', leer);

console.log('Última línea del programa');