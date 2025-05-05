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
                email:email,
                password:pass
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
            <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleClick} disabled={loading}>{loading ? "Submitting" : "Submit"}</button>
        </div>
    )
}

export default Signup
