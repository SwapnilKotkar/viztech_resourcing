import nc from "next-connect";
import connectDB from '../../db/connection'
import config from "../../middleware/config";

const CryptoJS = require('crypto-js')
const Admin = require("../../models/adminSchema")

const handler = nc(config);

handler.post(async(req, res) => {
    const {firstName, lastName, email, password} = req.body

    if(!firstName || !lastName || !email || !password) {
        return res.status(422).json({ error: "please fill the data properly !"});
    }

    try{
        const userExist = await Admin.findOne({email: email});

        if(userExist) {
            return res.status(422).json({error: "Email already Exist !"});
        }

        const user = new Admin({firstName, lastName, email, password: CryptoJS.AES.encrypt(password, process.env.CRYPTO_SECRET_KEY).toString()});

        await user.save();
       
        res.status(201).json({ message: "user registered successfully !"});

    } catch(err){ 
        res.staus(400).json({message : "sign up failed !"});  
    }
})

export default handler;