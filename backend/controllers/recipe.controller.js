const axios=require('axios')
const { validationResult } = require('express-validator')
const recipes=require('../db/model/recipe')

const createRecipe= async (req,res)=>{
    let body=req.body;
    let error=validationResult(req).errors
    if(error && error.length)
    {
        return res.status(400).json({success:false, message:error[0].msg})
    }
    try {
        let newRecipe= new recipes({
            title: body.title,
            ingredients: body.ingredients,
            steps: body.steps,
            cookingTime: body.cookingTime
        })
        await newRecipe.save();
        return res.status(201).json({success:true, message:"Recipe created successfully"})
    } catch (err) {
        return res.status(500).json({succes:false, message:err})
    }
}

const updateRecipe= async (req,res)=>{
    let id=req.params.id;
    let body=req.body;
    let error=validationResult(req).errors
    if(error && error.length)
    {
        return res.status(400).json({success:false, message:error[0].msg})
    }
    try {
        let recipe=await recipes.findByIdAndUpdate(id, body);
        if(!recipe)
        {
            return res.status(404).json({success:false, message:"Recipe not found"})
        }
        return res.status(200).json({success:true, message:"Recipe updated successfully"})
    } catch (error) {
        return res.status(500).json({succes:false, message:err})
    }
}

const getRecipes= async (req,res)=>{
    try {
        let data=await recipes.find({});
        return res.status(200).json({success:true, message:"Data fetched successfully", data:data})
    } catch (err) {
        return res.status(500).json({succes:false, message:err})
    }
}

const getSingleRecipe= async (req,res)=>{
    let id=req.params.id;
    let recipe= await recipes.findById(id);
    if(!recipe)
    {
        return res.status(404).json({success:false, message:"Recipe not found"})
    }
    res.status(200).json({success:true, messsage:"Found recipe", data:recipe})
}

const deleteRecipe= async (req,res)=>{
    let id=req.params.id;
    let deletedRecipe= await recipes.findByIdAndDelete(id);
    if(!deletedRecipe)
    {
        res.status(400).json({success:false, message:"Recipe not found"})
    }
    res.status(200).json({success:true, message:"Recipe deleted successfully"})
}

module.exports={createRecipe, getRecipes, getSingleRecipe, updateRecipe, deleteRecipe}