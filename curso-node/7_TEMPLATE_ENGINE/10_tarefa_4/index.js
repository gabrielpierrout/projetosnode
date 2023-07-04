const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const oculos = [
    {
        id: 1,
        url: 'https://www.macripar.com.br/img/products/oculos-de-seguranca-guepardo-incolor-lente-anti-embacante-kalipso_1_600.jpg',
        title: 'Óculos de Sol',
        color: 'Preto',
        price: 'R$15,99',
        sold: 15,
},
    {
        id: 2,
        url: 'https://img.lojadomecanico.com.br/256/36/313/114777/Oculos-de-Protecao-Ibiza-Lente-Marrom-co-kalipso-0119231.JPG',
        title: 'Óculos de Sol 02',
        color: 'Estampado',
        price: 'R$34,99',
        sold: 20,
    },
    {
        id: 3,
        url: 'https://d2du14ktcl9wyf.cloudfront.net/media/catalog/product/cache/1/small_image/256x/9df78eab33525d08d6e5fb8d27136e95/o/c/oculos-sol-oakley-subzero-sapphire-matte.jpg',
        title: 'Óculos de Sol Espelhado',
        color: 'Azul',
        price: 'R$50,00',
        sold: 40,
    },
]

app.get('/produto/:id', (req, res) => {
    const produto = oculos[parseInt(req.params.id) - 1]

    res.render('produto', { produto })
})

app.get('/', (req, res) => {

    const approved = true

    res.render('home', { approved, oculos })
})

app.listen(3000, () => {
    console.log('App funcionando...')
})