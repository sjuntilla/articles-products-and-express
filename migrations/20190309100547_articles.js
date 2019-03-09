exports.up = function (knex, Promise) {
    return knex.schema.createTable('articles', (table) => {
        table.increments('id');
        table.string('title', 50).notNullable();
        table.string('desc').notNullable();
        table.string('author', 100).notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('articles');
};