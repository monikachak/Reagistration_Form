import React, { useState } from "react"
import"./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Register = () => {
     const history = useNavigate();

    const[user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

   
    const handleChange = (e) => {
        setUser({
            ...user,[e.target.name]:e.target.value
        })

        // console.log(e.target.name,e.target.value)
        // console.log(e.target) 
        // const{name,value } = e.target

        // console.log(name,value)

        // setUser({
        //     ...user,
        //     [name]: value
        // })
    }
    const register =()=>{
        const{name,email,password,reEnterPassword} = user

        if(name && email && password && (password === reEnterPassword)){
            
            axios.post("http://localhost:4000/register",user)
            // .then(res => console.log(res))
            .then(
                res =>alert(res.data.message)
               
                )
                history('/login')
            // alert("posted")
        } else{
            alert("invalid input")
        }   
    }
    return(
    <div className="register">
        {console.log("user",user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}/>
        <input type="email" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}/>
        <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <div className="button" onClick={()=>history("/login")}>Login</div>
    </div>
    )
}
export default Register