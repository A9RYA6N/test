const mongoose=require('mongoose')
const { Schema } = mongoose;
const RecipeSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    steps:{
        type:String,
        required:true
    },
    cookingTime:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('recipes',RecipeSchema)