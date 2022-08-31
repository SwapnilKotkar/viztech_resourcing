import connectDB from '../../db/connection'
import nc from "next-connect";
import config from "../../middleware/config";

const jwt = require('jsonwebtoken');
const Admin = require("../../models/adminSchema");
const CryptoJS = require("crypto-js");

const handler = nc(config);

handler.put(async(req, res) => {
    const { token, password } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    try{
        const user = await Admin.findOneAndUpdate({email: decoded.email}, {password: CryptoJS.AES.encrypt(password, process.env.CRYPTO_SECRET_KEY).toString()})

        if(user){
            res.status(200).json({ 'message' : "succesfully updated" })
        }
        else{
        res.status(400).json({ 'message' : "user not found" })
        }

    }catch(err){
        res.status(401).json({'message': 'Failed to update'});
    }
    
})

export default handler;