import React, {useEffect} from 'react'
import { useNavigate } from 'react-router'
import Loginpage from './Loginpage'
import axios from 'axios'
import { useRecipeContext } from '../RecipeContext'
import Allrecipes from './Allrecipes'
const Homepage = () => {
    const {recipes, setRecipes}= useRecipeContext()
    useEffect(()=>{
        axios({
            method:"GET",
            url:"https://test-zeta-one-58.vercel.app/recipes/",
        }).then((res)=>{
            setRecipes(res.data.data)
        })
    }, [])
    const navigate=useNavigate();
    let token=localStorage.getItem('token');
    return (
        <div>
            {token ?<> <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>{localStorage.removeItem("token"); navigate('/')}}>Log out</button> <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>{navigate('/create-recipe')}}>Create new recipe</button> {recipes?.length>0 && recipes?.map((recipe)=>{
                    return(<><Allrecipes key={recipe._id} recipe={recipe}/></>);
                })}</>  : <Loginpage/>}
        </div>
    )
}

export default Homepage
