const express = require('express');
const exphbs = require('express-handlebars');
const pool = require('./db/conn')

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    const insertSQL = `INSERT INTO books (??, ??) VALUES (?, ?)`
    const data = ['title', 'pageqty', title, pageqty]

    pool.query(insertSQL, data, function(err) {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.get('/books', (req, res) => {
    const selectSQL = "SELECT * FROM books"

    pool.query(selectSQL, function(err, data) {
        if (err) {
            console.log(err)
            return
        }

        const books = data

        // console.log(books)

        res.render('books', { books })
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id

    const selectSQL = `SELECT * FROM books WHERE ?? = ?`

    const data = ['id', id]

    pool.query(selectSQL, data, function(err, data) {
        if (err) {
            console.log(err)
            return
        }

        const book = data[0]

        res.render('book', { book })
    })
})

app.get('/books/edit/:id', (req, res) => {
    const id = req.params.id

    const selectSQL = `SELECT * FROM books WHERE ?? = ?`

    const data = ['id', id]

    pool.query(selectSQL, data, function(err, data) {
        if (err) {
            console.log(err)
            return
        }

        const book = data[0]

        res.render('editbook', { book })
    })
})

app.post('/books/updatebook', (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty

    const updateSQL = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
    const data = ['title', title, 'pageqty', pageqty, 'id', id]

    pool.query(updateSQL, data, function(err) {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.post('/books/remove/:id', (req, res) => {
    const id = req.params.id

    const deleteSQL = `DELETE FROM books WHERE ?? = ?`
    const data = ['id', id]

    pool.query(deleteSQL, data, function(err) {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })

})

app.listen(3000)
