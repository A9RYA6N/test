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
                url:"hhttps://test-zeta-one-58.vercel.app/recipes/create-recipe/",
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
            <input type="text" placeholder='Enter title of recipe' onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" placeholder='Enter the steps' onChange={(e)=>setSteps(e.target.value)}/>
            <input type="text" placeholder='Enter the ingredients' onChange={(e)=>setIngredients(e.target.value)}/>
            <input type="text" placeholder='Enter the Cooking time' onChange={(e)=>setCookingTime(e.target.value)}/>
            <button onClick={handleClick} disabled={loading}>{loading ? "Submitting" : "Submit"}</button>
        </div>
    )
}

export default Createrecipe
