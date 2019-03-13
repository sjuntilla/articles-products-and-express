const express = require('express');
const app = express();
const ehbs = require('express-handlebars');
const bodyParser = require('body-parser');
const PORT = 5432;

const articles = require('./routes/articles.js');
const products = require('./routes/products.js');

app.engine('handlebars', ehbs({
    defaultLayout: 'index'
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.use('/products', products);
app.use('/articles', articles);


app.get('/', (req, res) => {
    res.render('home');
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}!`);
})