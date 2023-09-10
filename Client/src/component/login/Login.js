import React,{useState} from "react"
import"./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Login = ({setLoginUser}) => {
        let history = useNavigate();
     
    const[user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        // console.log(e.target) 
        const{name,value } = e.target
        // console.log(name,value)

        setUser({
            ...user,
            [name]: value
        })
    }

     const login = () =>{
        axios.post("http://localhost:4000/login", user)
        .then(res => 
            {
               alert(res.data.message) 
               setLoginUser(res.data.user)
       
             console.log(res.data.user)
             history("/")
           
            }
        
        )
        
     }

    return(
        <div className="login">
             {console.log("user",user)}
            <h1>Login</h1>
           
            <input type="email" name="email"  value={user.email} onChange={handleChange} placeholder="Enter Your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter You Password"></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() =>history("/register")}>Register</div>
        </div>
    )
}

export default Login