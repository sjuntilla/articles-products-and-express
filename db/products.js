    const knex = require('../db/index.js');
    const storage = [];

    const allProducts = () => {
        return knex.select().from('products');
    };

    const findProduct = (id) => {
        let result;
        storage.forEach(product => {
            if (product.id === id) {
                result = product;
                return result;
            }
        });

        return result;
    }

    const updateProduct = (id, name) => {
        storage.forEach(i => {
            if (i.id === id) {
                i.name = name;
            };
        });
    };

    const addItem = (name, price, inventory) => {
        let item = {};
        item.name = name;
        item.price = parseInt(price);
        item.inventory = parseInt(inventory);
        item.id = storage.length + 1;
        return item;
    };

    const removeItem = (id) => {
        storage.forEach(i => {
            if (i.id === id) {
                storage.splice(storage.indexOf(i), 1);
            }
        });
    }

    module.exports = {
        allProducts,
        updateProduct,
        findProduct,
        addItem,
        removeItem,
        storage
    }