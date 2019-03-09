const express = require('express');
const router = express.Router();

const articles = require('../db/articles.js');

router.get('/', (req, res) => {
    res.status(200).render('articles', articles);
});

router.get('/:title', (req, res) => {
    let body = req.body;
    let parsedName = req.params.title.replace(/%20/g, '');
    let found = articles.getArticle(parsedName);
    res.render('specific', found)
});


//ADDS A NEW ARTICLE
router.post('/', (req, res) => {
    let body = req.body;
    res.status(200);
    articles.addArticle(body.title, body.body, body.author);
    console.log(articles.allArticles())
    res.redirect('/articles');
});

//EDITS AN ARTICLE
router.put('/:title', (req, res) => {
    let body = req.body;
    let parsedName = req.params.title.replace(/%20/g, '');
    let found = articles.getArticle(parsedName);
    res.render('editarticle', found).redirect(`/${parsedName}`);
});

//DELETES AN ARTICLE
router.delete('/:title', (req, res) => {
    let body = req.body;
    let parsedName = req.params.title.replace(/%20/g, '');
    let deleted = articles.removeArticle(parsedName);
    res.render('articles', deleted);
})
module.exports = router;