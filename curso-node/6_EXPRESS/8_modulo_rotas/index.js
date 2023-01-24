const express = require('express')
const path = require('path')

const app = express()
const port = 3000 // variável ambiente

const usersRoutes = require('./users')

// ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates')

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`)
})
