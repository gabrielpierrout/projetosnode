const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Ola, este e meu primeiro server com html</h1><p>Testando atualização</p>')
})

server.listen(port, () => {
    console.log(`Servidor rodando na porte: ${port}`);
})