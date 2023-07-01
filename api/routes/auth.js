const router=require("express").Router();
const User=require("../models/User");
const CryptoJS=require("crypto-js");

//REGISTER
router.post("/register",async(req,res)=>{
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    });
    console.log(newUser);
    try{
        const user= await newUser.save();
        res.status(201).json({success:true,user});
    } catch(err){
        res.status(500).json(err);
    }
    
});
module.exports=router;
