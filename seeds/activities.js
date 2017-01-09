
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('activities').insert({user_id: 99905, name: 'running', frequency: 'daily', level: 8 }),
        knex('activities').insert({user_id: 99915, name: 'running', frequency: 'daily', level: 10 }),
        knex('activities').insert({user_id: 99922, name: 'running', frequency: 'monthly', level: 1 })
      ]);
    });
};
