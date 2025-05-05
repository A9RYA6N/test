const express=require('express');
const { check } = require('express-validator');
const {signIn, signUp}=require('../controllers/user.controller')
const userRouter=express.Router();
userRouter.post('/signup', [check('name').notEmpty(), check("email").notEmpty().isEmail(), check("password").notEmpty()], signUp);
userRouter.post('/signin', [check("email").notEmpty().isEmail(), check("password").notEmpty()], signIn);
module.exports=userRouter