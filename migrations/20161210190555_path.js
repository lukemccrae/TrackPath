// inside brewery seed file
exports.up = function(knex, Promise) {
    // return knex.raw('TRUNCATE brewery RESTART IDENTITY CASCADE;')
    //     .then(() => {
    return knex.schema.createTable('path', function(table) { //this creates the database in the format below
            table.increments(); //this equates to id with type serial
            table.string('current date');
            table.integer('hour');
            table.integer('minute');
            table.integer('day');
            table.integer('month');
            table.integer('year');
            table.integer('lat');
            table.integer('long');
        })
        // insert breweries with primary key IDs
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('path');
};
