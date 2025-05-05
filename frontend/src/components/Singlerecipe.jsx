import React from 'react'
import { useParams } from 'react-router'
import { useRecipeContext } from '../RecipeContext'
import axios from 'axios'
const Singlerecipe = () => {
    const {id}=useParams();
    const {recipes}=useRecipeContext()
    const recipe=recipes.find(r=>r._id==id)
    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.ingredients}</p>
            <p>{recipe.steps}</p>
            <p>{recipe.cookingTime}</p>
        </div>
    )
}

export default Singlerecipe
