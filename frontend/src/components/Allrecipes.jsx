import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
const Allrecipes = ({recipe}) => {
    const navigate=useNavigate()
    return (
        <div>
            <a onClick={()=>navigate(`/recipe/${recipe._id}`)} class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipe.title}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{recipe.ingredients}</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">{recipe.steps}</p>
            <p class="font-normal text-gray-700 dark:text-gray-400">{recipe.cookingTime}</p>
            </a>
            <button onClick={()=>{navigate('/')}}>Update recipe</button>
        </div>
    )
}

export default Allrecipes
