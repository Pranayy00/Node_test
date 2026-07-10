const userModel = require("../model/userModel");
const userMode=require("./db")
const express=require("express");
const bcrypt=require("bcryptjs");
const { log } = require("console");


const registerController=async(req,res)=>{
    try {
        const {Fname,email,pass}=req.body
        const existingUser=userModel.find({email})
        if (existingUser) {
            res.status(401).json({
                success:false,
                message:"user already exists"
            });
            
        }
        const hashedPassword=await bcrypt.hash(pass,10);

        //save user
       await userModel.create({Fname,email,pass:hashedPassword})

       res.redirect("/login")

    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            success:false,
            message:"Error in register API",
            error:error.message
        })
        
    }

}

//login user
const loginController=async (req,res)=>{
    try {
        const{email,pass}=req.body
        //compare passowrd
        const user=await userModel.findOne({email})
        if (user) {
            await bcrypt.compare(hashedPassword,user.pass)
            uname:req.session.uname
            _id:req.session._id
            res.redirect("/dashboard")
            
        } else {
            res.redirect("/login")
            
        }

       
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:true,
            message:"Error In Login API",
            error:error.message
        })

        
        
    }

}

//dashboard
const dashboardController=()=>{

}

//logout
const logout=(req,res)=>{
    req.session.destroy()

}