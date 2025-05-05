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
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={(e)=> {e.stopPropagation(); navigate(`/recipe/update/${recipe._id}`)}}>Update recipe</button>
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={(e)=>{
                e.stopPropagation();
                axios({
                    method:"DELETE",
                    url:`https://test-zeta-one-58.vercel.app/recipes/${recipe._id}`,
                    headers:{
                        'x-access-token':localStorage.getItem("token")
                    }
                }).then((res)=>{
                    alert("Recipe deleted!");
                    window.location.reload();
                })
            }}>Delete recipe</button>
            </a>
        </div>
    )
}

export default Allrecipes
