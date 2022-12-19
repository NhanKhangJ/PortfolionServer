import mongoose from "mongoose";
import ContactMessage from "../models/contactMessage.js";

export const createMessage = async (req,res) =>{
     const message = req.body;
     const newMessage = new ContactMessage(message);
     console.log(newMessage)
     try{
        await newMessage.save()
        res.status(201).json(newMessage)
     }catch (error){
        res.status(401).json({ message: error.message})
     }
}