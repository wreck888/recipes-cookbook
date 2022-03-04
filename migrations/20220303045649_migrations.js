
exports.up = function(knex) {
    return knex.schema 
        .createTable('users', (users) => {
            users.increments('user_id');
            users.string('username', 200).notNullable().unique();
            users.string('password', 200).notNullable();
        })      
        .createTable('recipes', (recipes) => {
            recipes.increments('recipe_id')
            recipes.string('title', 200).notNullable().unique();
            recipes.string('source', 200)
            recipes.string('category', 50)
            recipes.string('ingredients', 200).notNullable()
            recipes.string('instructions').notNullable()
            recipes.integer('user_id')
                .unsigned()
                .notNullable()
                .references('user_id')
                .inTable('users')
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
        })
      

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists("recipes")
};
