import connectDB from '../../db/connection'
import nc from "next-connect";
import config from "../../middleware/config";

const jwt = require('jsonwebtoken');
const Admin = require("../../models/adminSchema");

const handler = nc(config);


handler.post(async(req, res) => {
    const {token} = req.body;
    console.log(token)
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log("token is",decoded)
        res.status(200).json({'decoded' : decoded})
    }catch(err){
        res.status(401).json({'Unauthorized': 'No token provided'});
        console.log(err);
    }
})





export default handler;