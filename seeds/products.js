exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([{
          id: 1,
          name: 'aname',
          price: 4352342,
          inventory: 50
        },
        {
          id: 2,
          name: 'aname',
          price: 4352342,
          inventory: 50
        },
        {
          id: 3,
          name: 'aname',
          price: 4352342,
          inventory: 50
        }
      ]);
    });
};