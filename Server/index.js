import express from "express"

import mongoose, { Schema } from "mongoose"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://0.0.0.0:27017/UsersData",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}, () =>{
    console.log("DB Connected")
})

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

 const User = new mongoose.model("User", userSchema)
//Routes
app.post("/login",(req,res)=>{ 
    const{email,password} = req.body
    User.findOne({email: email},(err, user) =>{
         if(user){
             if(password === user.password){
                 res.send({message:"Login Succefully", user: user})
                } else {
                 res.send({message:"Password didn't match"})

                }
                
         } else{
            res.send({message:"User not register"})
         }
    })
    // res.send("My API login")
})
app.post("/register",(req,res)=>{ 
    const{name,email,password} = req.body

    User.findOne({email: email}, (err, user) =>{
         if(user){
            res.send({message:"User already registered"})
         } 
            else{
           
    
    const usersave =new User({
        name:name,
        email:email,
        password:password
    })
       usersave.save(err =>{
          if(err){
            res.send(err)
          } else{
            res.send({ message:"Successfully Registered and Please login now."})
          }
          //     //    // console.log(req.body)
  
//     //    // res.send("My API register")      
    }) 

        }
         })
   
})

app.listen(4000,() =>{
    console.log("BE start at port 4000")
})


// import express from "express"
// import mongoose from "mongoose"
// import cors from "cors"

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())

// mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB",{
//     useNewUrlParser:true,
//     useUnifideTopology:true
// },() => {
//     console.log("DB connected")
// })

// const UserSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String
// })

// const User = new mongoose.model("user", UserSchema)

// //Routes
//  app.post("/login",(req,res)=>{
//     res.send("my api login")
//  })
//  app.post("/register",(req,res)=>
//  {
//     const{name,email,password} = req.body
//     User.findOne({email:email}, (err,user) => 
//        {
//            if(user){
//             res.send({message: "User already register"})
//            }
//                else{
//                       const user = new User({
//                       name,
//                       email,
//                       password
//                       })
//                       user.save(err =>{
//                         if(err){
//                          res.send(err)
//                          } else{
//                           res.send({message:"Successfully registered"})
//                          }
//                        })
//                         // const user = new user({})
//                         // console.log(req.body)
//                         // res.send("my api register")
//                     }
//         })  
//  })

// app.listen(2000,() =>{
//     console.log("Be started at port 2000")
// })