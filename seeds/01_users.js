const users = [
   {username: 'lukeskywalker', password: 'abc123'},
   {username: 'anakinskywalker', password: 'abc123'},
   {username: 'ahsokatano', password: 'abc123'}
]


exports.seed = function(knex) {
     return knex('users').insert(users);
};
