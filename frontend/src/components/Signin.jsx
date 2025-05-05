import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading]=useState(false)
    const navigate=useNavigate();
    const handleClick=()=>{
        setLoading(true);
        try {
            const apiObj={
                email:email,
                password:password
            }
            axios({
                method:"POST",
                url:"https://test-zeta-one-58.vercel.app/user/signin",
                data:apiObj,
            }).then((res)=>{
                localStorage.setItem("token", res.data.token);
                navigate('/');
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
            <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <button disabled={loading} onClick={handleClick}>{loading ? "Submitting" : "Submit"}</button>
        </div>
    )
}

export default Signin
