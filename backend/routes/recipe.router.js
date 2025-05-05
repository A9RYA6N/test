const express=require('express');
const { check } = require('express-validator');
const auth=require('../middleware/auth')
const {createRecipe, getRecipes, getSingleRecipe, updateRecipe, deleteRecipe} = require('../controllers/recipe.controller')
const recipeRouter=express.Router()
recipeRouter.post('/create-recipe',[check('title').notEmpty(),check('title').notEmpty(),check('ingredients').notEmpty(),check('steps').notEmpty(),check('cookingTime').notEmpty(), auth], createRecipe)
recipeRouter.get('/', getRecipes)
recipeRouter.get('/:id', getSingleRecipe)
recipeRouter.put('/:id', auth, updateRecipe)
recipeRouter.delete('/:id', auth, deleteRecipe)
module.exports=recipeRouter;