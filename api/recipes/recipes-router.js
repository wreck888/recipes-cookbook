const express = require('express');
const router = express.Router()
const Recipes = require('./recipes-model')

router.get('/', async (req, res, next) => {
    try {
        const recipes = await Recipes.getRecipes()
        res.status(200).json(recipes)
    }catch(error){
        next(error)
    }
})

router.get('/:recipes_id', async (req, res, next) => {
    try {
        const recipes = await Recipes.getRecipesById(req.params.recipes_id)
        res.status(200).json(recipes)
    }catch(error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newRecipe = await Recipes.addRecipe(req.body)
        res.status(200).json(newRecipe)
    }catch(error){
        next(error)
    }
})

router.put('/:recipes_id', async (req, res, next) => {
    try {
        const recipes = await Recipes.updateRecipe(req.params.recipes_id, req.body)
        res.status(200).json(recipes)
    }catch(error) {
        next(error)
    }
})

router.delete('/:recipe_id', async (req, res, next) => {
    try {
        const removed = await Recipes.removeRecipe(req.params.recipe_id)
        res.status(200).json({ message: `recipe has been deleted successfully`})
    }catch (error) {
        next(error)
    }
})

module.exports = router;