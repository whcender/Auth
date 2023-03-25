import express from "express";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js';

const router = express.Router();


// localhost:5000/users 'a yapılan post isteği
router.post("/signup", async (req, res)=>{
const re = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;

    try {
        //console.log(req.body)
        const { fullname, password, phoneNumber, email, password_confirmation } = req.body;
        

        if(!fullname || !password || !phoneNumber || !email || !password_confirmation)
            return res.status(400).json({ message: 'Please fill all fields.'})

        if(password !== password_confirmation)
            return res.status(400).json({ message: 'Passwords do not match.'})

        const userExists = await User.findOne({ email })
        if(userExists)
            return res.status(400).json({ message: 'User already exists.'})

        if(!re.test(phoneNumber))
            return res.status(400).json({ message: 'Phone number is not valid.'})

        const hashedPassword = await bcrypt.hash(password, 10)

        const createdUser = await User.create({
            fullname,
            email,
            password: hashedPassword,
            phoneNumber
        })

        return res.status(201).json({ createdUser, message: 'User created successfully.'});
    } catch (error) {
        console.log(error)
        return res.json({message: "create user failed"})
    }
})

// localhost:5000/users/signin POST request
router.post("/signin", async (req,res)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})
        if(!user)
            return res.status(400).json({message: "user does not exist"})
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect)
            return res.status(400).json({message: "Wrong Password"})
        
        return res.status(200).json({ user, message: 'Authentication successful' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

export default router;