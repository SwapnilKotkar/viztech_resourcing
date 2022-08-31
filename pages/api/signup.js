const { connectToDatabase } = require('../../lib/mongodb');

const CryptoJS = require('crypto-js')
const Admin = require("../../models/adminSchema")

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST': {
            return signUpAdmin(req, res);
        }
    }
}

async function signUpAdmin(req, res){
    const {firstName, lastName, email, password} = req.body

    if(!firstName || !lastName || !email || !password) {
        return res.status(422).json({ error: "please fill the data properly !"});
    }

    try{
        let { db } = await connectToDatabase();

        const userExist = await db.collection('admins').findOne({email : email})

        if(userExist) {
            return res.status(422).json({error: "Email already Exist !"});
        }

        const user = await db.collection('admins').insertOne({firstName, lastName, email, password: CryptoJS.AES.encrypt(password, process.env.CRYPTO_SECRET_KEY).toString()})
       
        res.status(201).json({ message: "user registered successfully !"});

    } catch(err){ 
        res.staus(400).json({message : "sign up failed !"});  
    }
}
