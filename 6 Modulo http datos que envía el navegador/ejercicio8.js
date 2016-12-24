var http = require('http');
var url = require('url');

var servidor = http.createServer(function(pedido,respuesta){
    var objetoUrl = url.parse(pedido.url);
    console.log('Camino completo del recurso: '          + objetoUrl.path);
    console.log('Solo el camino y nombres del recurso: ' + objetoUrl.pathname);
    console.log('parametros del recurso: '               + objetoUrl.query);
    respuesta.writeHead(200, {'Content-type':'text/html'});
    respuesta.write('<!doctype html><html><head></head><body>Hola mundo</body></html>');
    respuesta.end();
});

servidor.listen(8888);

console.log('Servidor web iniciado');