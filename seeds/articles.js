exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([{
          id: 1,
          title: 'fuck!',
          desc: 'shit!!!',
          author: 'whore!!'
        },
        {
          id: 2,
          title: 'fuck!',
          desc: 'shit!!!',
          author: 'whore!!'
        },
        {
          id: 3,
          title: 'fuck!',
          desc: 'shit!!!',
          author: 'whore!!'
        }
      ]);
    });
};