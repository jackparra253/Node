var os = require('os');
console.log('Memoria libre: ' + os.freemem() + ' bytes');
var num = [];
for( i = 0; i<= 1000000 ; i++)
{
    num.push(i);
}
console.log("Número: " + num);
console.log('Memoria libre: ' + os.freemem() + ' bytes');
//cls