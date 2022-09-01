const { connectToDatabase } = require('../../lib/mongodb');

const jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");
const Admin = require("../../models/adminSchema")


export default async function handler(req, res) {
    switch (req.method) {
        case 'POST': {
            return signinAdmin(req, res);
        }
    }
}

async function signinAdmin(req, res){
    try{
        let { db } = await connectToDatabase();

        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: "please fill the data"});
        }

        //finding the email is exists already or not
        const user = await db.collection('admins').findOne({ email: email })
        // const user = await Admin.findOne({ email: email });

        if(user){
            let bytes = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_SECRET_KEY);
            let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
            
            if( password == decryptedPass){
                let token = jwt.sign({ email:user.email, first_name:user.firstName, last_name:user.lastName }, process.env.JWT_SECRET_KEY, { expiresIn: "2d"});
                res.status(200).json({token})
            }
            else{
                res.status(401).json({ error: "Invalid credientials !"})
            }          
        }else{
            res.status(400).json({error: "user invalid !"});             
        }
        
    } catch(err){
        res.staus(400).json({message : "sign in failed !"});    
        }
}




// handler.post(async(req, res) => {
//     try{
//         const {email, password} = req.body;

//         if(!email || !password){
//             return res.status(400).json({error: "please fill the data"});
//         }

//         //finding the email is exists already or not
//         const user = await Admin.findOne({ email: email });

//         if(user){
//             let bytes = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_SECRET_KEY);
//             let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
            
//             if( password == decryptedPass){
//                 let token = jwt.sign({ email:user.email, first_name:user.firstName, last_name:user.lastName }, process.env.JWT_SECRET_KEY, { expiresIn: "2d"});
//                 res.status(200).json({token})
//             }
//             else{
//                 res.status(401).json({ error: "Invalid credientials !"})
//             }          
//         }else{
//             res.status(400).json({error: "user invalid !"});             
//         }
        
//     } catch(err){
//         res.staus(400).json({message : "sign in failed !"});    
//         }
// })

// export default handler;