const jwt=require('jsonwebtoken')

const secretToken=process.env.SECRET_TOKEN;
module.exports=(req,res,next)=>{
    const token=req.headers['x-access-token']
    if(!token)
    {
        res.status(403).json({success:false, message:"No token found"})
    }
    try{
        const decode=jwt.verify(token, secretToken)
        next();
    }catch(err)
    {
        res.status(401).json({success:false, message:"Token expired or corrupt"})
    }
}
