const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

const usersRoutes = require('./products');

// ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json());

// arquivos estáticos
app.use(express.static('public'));

const basePath = path.join(__dirname, 'templates');

app.use('/products', usersRoutes);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})