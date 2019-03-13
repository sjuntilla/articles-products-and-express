const express = require('express');
const router = express.Router();
const knex = require('../db/index.js');
const articles = require('../db/articles.js');

router.get('/', (req, res) => {
    res.status(200);
    knex.select('*').from('articles').then((articles) => {
        console.log(articles);
        res.render('articles', {
            articles
        });
    })
});

router.get('/:title', (req, res) => {
    let parsedName = req.params.title.replace(/%20/g, '');
    knex.select().from('articles').where('title', parsedName).then(articles => {
        let item = articles[0];
        res.render('specific', item)
    });
    // let found = articles.getArticle(parsedName);
    // res.render('specific', found)
});

//ADDS A NEW ARTICLE
router.post('/', (req, res) => {
    let body = req.body;
    res.status(200);
    knex('articles').insert({
        title: body.title,
        body: body.body,
        author: body.author
    }).then(() => {
        res.redirect('/articles');
    });
    console.log(articles.allArticles())
});

//EDITS AN ARTICLE
router.get('/:title', (req, res) => {
    let parsedName = req.params.title.replace(/%20/g, '');
    // let found = articles.getArticle(parsedName);
    // res.render('editarticle', found).redirect(`/${parsedName}`);
    knex.select().from('articles').where('title', parsedName).then(articles => {
        let item = articles[0];
        res.status(200).render('editartcile', item).redirect(`/${parsedName}`);
    })
});

//DELETES AN ARTICLE VIA BROWSER
router.get('/:title/delete', (req, res) => {
    let parsedName = req.params.title.replace(/%20/g, '');
    knex.select().from('articles').where('title', parsedName).del().then(res.redirect('/articles'));
    console.log(articles.allArticles());
})

//DELETES AN ARTICLE via postman
router.delete('/:title', (req, res) => {
    let parsedName = req.params.title.replace(/%20/g, '');
    // let deleted = articles.removeArticle(parsedName);
    // res.render('articles', deleted);
    knex.select().from('articles').where('title', parsedName).del().then(res.redirect('/articles'));
});


module.exports = router;