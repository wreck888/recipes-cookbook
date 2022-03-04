const db = require('../../data/dbConfig')

function getRecipes(){
    return db('recipes')
}

async function getRecipesById(recipe_id){
    const recipe = await db('recipes')
        .where('recipe_id', recipe_id)
        return recipe;
}

function addRecipe(recipe){
    const result = db('recipes')
        .insert(recipe)
        return result
}

async function updateRecipe(recipe_id, change){
    return db('recipes')
        .where('recipe_id', recipe_id)
        .update(change)
        .then(() => {
            return getRecipesById(recipe_id)
        })
}

async function removeRecipe(recipe_id) {
    const result = await db('recipes')
        .where('recipe_id', recipe_id)
        .del()
    return result

}

module.exports = {
    getRecipes,
    getRecipesById,
    addRecipe,
    updateRecipe,
    removeRecipe
}