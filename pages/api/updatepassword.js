const jwt = require('jsonwebtoken');
const Admin = require("../../models/adminSchema");
const CryptoJS = require("crypto-js");


const { connectToDatabase } = require('../../lib/mongodb');

export default async function handler(req, res) {
    switch (req.method) {
        case 'PUT': {
            return updatePassword(req, res);
        }
    }
}

async function updatePassword(req, res){
    const { token, password } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    try{
        let { db } = await connectToDatabase();

        const user = await db.collection('admins').findOneAndUpdate({email: decoded.email}, {$set: {password: CryptoJS.AES.encrypt(password, process.env.CRYPTO_SECRET_KEY).toString()}})


        if(user){
            res.status(200).json({ 'message' : "succesfully updated" })
        }
        else{
        res.status(400).json({ 'message' : "user not found" })
        }

    }catch(err){
        res.status(401).json({'message': 'Failed to update'});
    }
}