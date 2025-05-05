const express=require('express')
const app=express();
const cors=require('cors');
app.use(cors());
require('dotenv').config();
const userRouter=require('./routes/user.router')
const recipeRouter=require('./routes/recipe.router')
const port=process.env.PORT;
const mongoose=require('./db/connection')
app.use(express.json());
app.use('/user', userRouter)
app.use('/recipes', recipeRouter)
app.use((req,res)=>{
    res.status(404).send(`<html>
    <head>
        <title>404</title>
    </head>
    <body>
        <h1>PAGE NOT FOUND</h1>
    </body>
</html>`)
})
app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }
    console.log("Hello")
})