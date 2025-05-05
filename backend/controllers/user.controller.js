const axios=require('axios')
const { validationResult } = require('express-validator')
const bcrypt=require('bcryptjs')
const users=require('../db/model/user')
const jwt=require('jsonwebtoken')
const signUp= async (req,res)=>{
    let error= validationResult(req).errors;
    let body=req.body;
    if(error && error.length)
    {
        return res.status(400).json({success:false, message:error[0].msg})
    }
    console.log(error)
    let existingUser= await users.findOne({
        email:body.email
    })
    console.log(existingUser)
    if(existingUser && Object.keys(existingUser).length)
    {
        return res.status(400).json({success:false, message:"User already signed up"})
    }
    const salt=await bcrypt.genSalt(11);
    try {
        let newUser= new users({
            name: body.name,
            email: body.email,
            password: await bcrypt.hash(body.password, salt),
            phone: body.phone
        })
        await newUser.save();
        return res.status(201).json({success:true, message:"User Signed up"})
    } catch (error) {
        return res.status(500).json({success:false, message:error})
    }
}

const signIn= async (req,res)=>{
    try {
        let body=req.body;
        let error=validationResult(req).errors
        if(error && error.length)
        {
            res.status(400).json({success:false, message:error[0].msg})
        }
        let user= await users.findOne({
            email:body.email
        })
        if(!user)
        {
            return res.status(400).json({success:false, message:"User not found"})
        }
        const isPasswordMatched=bcrypt.compare(body.password, user.password)
        if(!isPasswordMatched)
        {
            return res.status(400).json({success:false, message:"Incorrect password"})
        }
        const payload={
            userId:user._id,
            name:user.name
        }
        const secretToken=process.env.SECRET_TOKEN;
        jwt.sign(payload,secretToken,{
            expiresIn:3600
        }, (err,token)=>{
            if(err)
            {
                res.status(500).json({success:false,message:err.message})
            }
            res.status(200).json({success:true, message:"Signed in successfully", token:token})
        })   
    } catch (err) {
        res.status(500).json({success:false, message:err})
    }
}

module.exports={signUp, signIn}