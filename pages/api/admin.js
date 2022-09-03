const jwt = require('jsonwebtoken');

const { connectToDatabase } = require('../../lib/mongodb');

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST': {
            return verifyAdmin(req, res);
        }

        case 'PUT': {
            return updateAdmin(req, res);
        }
    }
}

async function verifyAdmin(req,res){
    const {token} = req.body;
    try{
        let { db } = await connectToDatabase();

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await db.collection('admins').findOne({email : decoded.email})

        if(user){
            res.status(200).json(user)
        }
        else{
        res.status(400).json({ 'message' : "user not found" })
        }

    }catch(err){
        res.status(401).json({'Unauthorized': 'No token provided'});
    }
}

async function updateAdmin(req,res){
    const { firstName, lastName, email } = req.body;
    try{
        let { db } = await connectToDatabase();

        const user = await db.collection('admins').findOneAndUpdate({email : email}, {$set: {firstName: firstName, lastName: lastName}})

        if(user){
            res.status(200).json(user)
        }
        else{
        res.status(400).json({ 'message' : "user not found" })
        }

    }catch(err){
        res.status(401).json({'message': 'Failed to update'});
    }  
}