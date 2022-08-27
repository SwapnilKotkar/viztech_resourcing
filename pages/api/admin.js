import connectDB from '../../db/connection'
import nc from "next-connect";
import config from "../../middleware/config";

const jwt = require('jsonwebtoken');
const Admin = require("../../models/adminSchema");

const handler = nc(config);


handler.get(async(req, res) => {
    try{
    }catch(err){
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
    }
})





export default handler;