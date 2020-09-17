const http = require('http'); //este paquete viene en node, no requiere npm install

//para hacer peticiones http primero creamos el servidor:

http.createServer((req, res)=>{

    res.writeHead(200 , {'Content-Type':'application/json'});

    let salida = {
        nombre:'jhon',
        edad: 28,
        url: req.url
    }
    //res.write('hola mundo');
    res.write(JSON.stringify(salida));
    res.end()
})
    .listen(8080);

console.log('escuchando el puerto 8080');
