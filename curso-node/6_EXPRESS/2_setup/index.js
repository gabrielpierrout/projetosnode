const express = require('express')
const app = express()
const port = 3000 // variável ambiente

app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Página de Login</h1>')
})

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`)
})
