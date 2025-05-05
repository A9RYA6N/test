import React, {useState} from 'react'
import axios from 'axios'
const Createrecipe = () => {
    const [title, setTitle] = useState('')
    const [steps, setSteps] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [loading, setLoading] =useState(false)
    const handleClick=()=>{
        setLoading(true);
        try {
            const apiObj={
                title,
                ingredients,
                steps,
                cookingTime,
            }
            axios({
                method:"POST",
                url:"https://test-zeta-one-58.vercel.app/recipes/create-recipe/",
                data:apiObj,
                headers:{
                    'x-access-token':localStorage.getItem("token")
                }
            }).then((res)=>{
                alert("Recipe made!")
            })
            .finally(()=>{
                setLoading(false)
            })
        } catch (error) {
            console.log(error.message)
        }
        
    }
    return (
        <div>
            <input class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder='Enter title of recipe' onChange={(e)=>setTitle(e.target.value)}/>
            <input class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder='Enter the steps' onChange={(e)=>setSteps(e.target.value)}/>
            <input class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder='Enter the ingredients' onChange={(e)=>setIngredients(e.target.value)}/>
            <input class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder='Enter the Cooking time' onChange={(e)=>setCookingTime(e.target.value)}/>
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleClick} disabled={loading}>{loading ? "Submitting" : "Submit"}</button>
        </div>
    )
}

export default Createrecipe
