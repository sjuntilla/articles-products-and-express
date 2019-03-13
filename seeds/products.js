// const productsData = require('');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([{
          name: 'aname',
          price: 4352342,
          inventory: 50
        },
        {
          name: 'aname',
          price: 4352342,
          inventory: 50
        },
        {
          name: 'aname',
          price: 4352342,
          inventory: 50
        }
      ]);
    });
};