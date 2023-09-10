import React from "react"
import"./home.css"

const Home = ({setLoginUser}) => {
    return(
        <div className="homepage">
       <h1>Hello Homepage</h1>  <br/>
       {/* <button type="button" onclick="alert('Hello world!')">Click Me!</button> */}
        <div className="button" onClick={()=>{setLoginUser({})}} >Logout</div>

        </div>
    )
}
 export default Home