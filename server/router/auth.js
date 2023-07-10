const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.post('/register', async(req, res) => {
    const { name, email, password, cpassword } = req.body;
    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }

    try {
       const response = await User.findOne({email:email});
         if(response){
                return res.status(422).json({error:"Email already exists"});
         }else if(password != cpassword){
            return res.status(422).json({error:"Passwords are not matching"});
         }else{
            const user = new User({ name, email, password, cpassword });
            await user.save();
            res.status(201).json({ message: "User registered successfully" });
         }
    }catch(err){
        console.log(err);
    }
    
});

router.post('/login', async(req,res) =>{
   const {email,password} = req.body;
   if(!email || !password){
    return res.status(400).json({error:"Please fill all the fields"});
   }

    try{
        const userLogin = await User.findOne({email:email});
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);
           const token = await userLogin.generateAuthToken();
           console.log(token);
           res.cookie("jwtoken",token,{
               expires:new Date(Date.now()+25892000000),
               httpOnly:true
           });
            if(!isMatch){
                res.status(400).json({error:"Invalid credentials"});
            }else{
                res.json({message:"User signed in successfully"});
            }
        }else{
            res.status(400).json({error:"Invalid credentials"});
        }
    }catch(err){
        console.log(err);
    }

});

module.exports = router;