const { connectToDatabase } = require('../../lib/mongodb');

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET': {
            return getResumes(req, res);
        }

        case 'POST': {
            return postResume(req, res);
        }

        case 'DELETE': {
            return deleteResume(req, res);
        }
    }
}

async function getResumes(req,res){
    try{
        let { db } = await connectToDatabase();

        const resumes = await db.collection('resumes').find().toArray();

        if(resumes){
            res.status(200).json(resumes)   
        }
        else {
            res.staus(404).json({ message : "failed to fetch resumes !"})
        }
    }catch(err) {
        res.status(400).json({error: err, message : "error in api/resumes"})
    }
}

async function postResume(req,res){
    const { uniqueID, fullName, email, joinFrom, resumeTitle, resumeURL, applyFor, comments } = req.body

    if(!fullName|| !email || !resumeTitle || !resumeURL || !applyFor ) {
        return res.status(422).json({ error: "please fill the data properly !"});
    }

    try{
        let { db } = await connectToDatabase();

        const resume = await db.collection('resumes').insertOne({ uniqueID, fullName, email, joinFrom, resumeTitle, resumeURL, applyFor, comments });

        if(resume){
        res.status(200).json({message : "Resume submitted successfully !"})
        }
        else{
            res.status(400).json({message : "Failed to submit resume !"})
        }

    }catch(err){ 
        res.status(400).json({message : "Try again to submit resume!"})
    }
}

async function deleteResume(req,res){
    const {id } = req.body

    try{
        let { db } = await connectToDatabase();

        const findResume = await db.collection('resumes').findOneAndDelete({uniqueID : id})

        if(findResume){
            res.status(200).json({message:"Resume deleted from approved list"})
        }
        else{
            res.status(400).json({message : "resume not found, try again"})
        }

    }catch(err){ 
        res.status(400).json({message : "Try again to delete resume!"})
    }
}