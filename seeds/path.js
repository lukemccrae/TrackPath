exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('path').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('path').insert({
                    hour: 5,
                    minute: 5,
                    day: 5,
                    month: 5,
                    year: 5,
                    lat: 5,
                    long: 5
                })
            ]);
        });
};
