const express = require('express');
const router = express.Router();
const knex = require('../db/index.js');
const products = require('../db/products.js');

router.get('/', (req, res) => {
    // res.status(200).render('products', products);
    knex.select('*').from('products').then((products) => {
        console.log(products);
        res.render('products', {
            products
        });
    })
});

router.get('/new', (req, res) => {
    res.status(200).render('newproducts', {});
});

router.get('/:id/edit', (req, res) => {
    const paramsId = req.params.id;
    // const product = products.findProduct(paramsId);
    knex.select().from('products').where('id', paramsId).then(products => {
        let item = products[0];
        res.status(200).render('editproduct', item);
    });
});

router.get('/:id', (req, res) => {
    const paramsId = req.params.id;
    knex.select().from('products').where('id', paramsId).then(products => {
        let item = products[0];
        res.status(200).render('getproduct', item);
    });
    // const product = products.findProduct(paramsId);
    // console.log(paramsId);
    // res.status(200).render('getproduct', product);
});

router.get('/:id/delete', (req, res) => {
    const paramsId = req.params.id;
    knex.select().from('products').where('id', paramsId).then(products => {
        let item = products[0];
        res.status(200).render('deleteproduct', item);
    });
    // const product = products.findProduct(paramsId);
    // res.status(200).render('deleteproduct', product);
});

//ADDS A NEW PRODUCT
router.post('/', (req, res) => {
    let body = req.body;
    if (isNaN(parseInt(body.price)) || !isNaN(parseInt(body.name))) {
        res.status(500);
        return res.json({
            'INVALID': 'Price should be a number and name should be a string!'
        })
    } else if (body.name) {
        knex('products').insert({
            name: body.name,
            price: body.price,
            inventory: body.inventory
        }).then(() => {
            res.redirect('/products')
        });
    };
});

//EDITS A PRODUCT
router.put('/:id/edit', (req, res) => {
    let body = req.body;
    let params = req.params;
    let idx = products.findProduct(params.id);
    products.updateProduct(body.id, body.name);

    res.redirect(`/${params.id}`);
});

//DELETES A PRODUCT
router.delete('/:id', (req, res) => {
    let body = req.body;
    let paramsId = req.params.id;
    products.removeItem(body.id);
    res.send('Item successfully removed!');
})
module.exports = router;