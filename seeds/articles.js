const articles = require('../db/articles.js');
let articlesData = articles.storage;

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([{
          title: 'dummy',
          body: 'text',
          author: 'ya girl sam'
        },
        {
          title: 'sadness',
          body: 'the crushing weight of my own existence',
          author: 'ya girl sam'
        },
        {
          title: 'hellohellohelloooo',
          body: 'i love you, i trust you',
          author: 'ya girl sam'
        }
      ]);
    });
};