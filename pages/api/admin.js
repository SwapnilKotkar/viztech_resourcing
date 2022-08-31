import connectDB from '../../db/connection'
import nc from "next-connect";
import config from "../../middleware/config";

const jwt = require('jsonwebtoken');
const Admin = require("../../models/adminSchema");

const handler = nc(config);


handler.post(async(req, res) => {
    const {token} = req.body;
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await Admin.findOne({email : decoded.email})

        if(user){
            res.status(200).json(user)
        }
        else{
        res.status(400).json({ 'message' : "user not found" })
        }

    }catch(err){
        res.status(401).json({'Unauthorized': 'No token provided'});
    }
})

handler.put(async(req, res) => {
    const { firstName, lastName, email } = req.body;
    try{
        const user = await Admin.findOneAndUpdate({email: email}, {firstName: firstName, lastName: lastName})

        if(user){
            res.status(200).json(user)
        }
        else{
        res.status(400).json({ 'message' : "user not found" })
        }

    }catch(err){
        res.status(401).json({'message': 'Failed to update'});
    }
    
})


export default handler;