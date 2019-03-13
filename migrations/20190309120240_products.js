exports.up = function (knex, Promise) {
    return knex.schema.createTable('products', (table) => {
        table.increments();
        table.string('name');
        table.integer('price');
        table.integer('inventory');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('products');

};