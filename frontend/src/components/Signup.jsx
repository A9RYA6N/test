import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading]=useState(false)
    const navigate=useNavigate();
    const handleClick=()=>{
        setLoading(true);
        try {
            const apiObj={
                name:name,
                email:email,
                password:password
            }
            axios({
                method:"POST",
                url:"https://test-zeta-one-58.vercel.app/user/signup",
                data:apiObj,
            }).then((res)=>{
                alert("Account made!")
                navigate('/signin')
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
            <input class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
            <input class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleClick} disabled={loading}>{loading ? "Submitting" : "Submit"}</button>
        </div>
    )
}

export default Signup
