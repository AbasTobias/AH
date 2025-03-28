const http = require('http');
const port = 3000;

const server = http.createServer((request, response)=>{
    
    response.writehead(200,{'content-type': 'text/plain'})
    const url = request.url;
    console.log (request.url)

    if(  url == '/'){
        body = '<h1> bienvenido </h1>';
    } else if (url == '/products.') 

    response.end('Hola desde el servidor node.js')
    console.log('Un cliente conectado')
});


server.listen(port,() => {
    console.log(`Servidor web ${port} ` );
})