const mongoose=require('mongoose')
let mongoUrl=process.env.MONGO_URL;
mongoose.connect(mongoUrl).then((err)=>{
    console.log("Connected to db!")
})