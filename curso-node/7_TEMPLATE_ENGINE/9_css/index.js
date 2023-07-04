const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {

    const items = ["Item a", "Item b", "Item c"]

    res.render('dashboard', { items})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender o nodejs...',
        comments: 4
    }

    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'Javascript',
            body: 'Este artigo vai te ajudar a aprender o nodejs...',
            comments: 4
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Este artigo vai te ajudar a aprender o PHP... ',
            comments: 3
        },
        {
            title: 'Aprender Python',
            category: 'Python',
            body: 'Este artigo vai te ajudar a aprender o Python...',
            comments: 2
        },
    ]

    res.render('blog', { posts })
})

app.get('/', (req, res) => {

    const user = {
        name: "Gabriel",
        surname: "Pierrout",
        age: 27
    }

    const palavra = "Teste"

    const auth = true

    const approved = true

    res.render('home', { user: user, palavra, auth, approved })
})

app.listen(3000, () => {
    console.log('App funcionando...')
})