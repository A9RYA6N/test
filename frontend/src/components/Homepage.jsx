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
            url:"http://localhost:3001/recipes/",
        }).then((res)=>{
            setRecipes(res.data.data)
        })
    }, [])
    const navigate=useNavigate();
    let token=localStorage.getItem('token');
    return (
        <div>
            {token ?<> <button onClick={()=>{localStorage.removeItem("token"); navigate('/')}}>Log out</button> <button onClick={()=>{navigate('/create-recipe')}}>Create new recipe</button> {recipes?.length>0 && recipes?.map((recipe)=>{
                    return(<><Allrecipes key={recipe._id} recipe={recipe}/></>);
                })}</>  : <Loginpage/>}
        </div>
    )
}

export default Homepage
