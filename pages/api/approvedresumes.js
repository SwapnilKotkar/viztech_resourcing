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

        const approved_resumes = await db.collection('approvedresumes').find().toArray();

        if(approved_resumes){
            res.status(200).json(approved_resumes)   
        }
        else {
            res.staus(404).json({ message : "failed to fetch approved resumes !"})
        }
    }catch(err) {
        res.status(400).json({error: err, message : "error in api/approvedresumes"})
    }
}

async function postResume(req,res){
    const { uniqueID, fullName, email, joinFrom, resumeTitle, resumeURL, applyFor, comments } = req.body

    try{
        let { db } = await connectToDatabase();

        const findResume = await db.collection('resumes').findOneAndDelete({uniqueID : uniqueID})

        if(findResume){
            const resume = await db.collection('approvedresumes').insertOne({uniqueID, fullName, email, joinFrom, resumeTitle, resumeURL, applyFor, comments});
            res.status(200).json({message : "Resume added to approved list!"})
        }
        else{
            res.status(400).json({message:"Resume already exists in approved list"})
        }
        
    }catch(err){ 
        res.status(400).json({message : "Try again to approve resume!"})
    }
}

async function deleteResume(req,res){
    const { uniqueID } = req.body

    try{
        let { db } = await connectToDatabase();

        const delete_resume = await db.collection('approvedresumes').findOneAndDelete({uniqueID : uniqueID})

        if(delete_resume){
            res.status(200).json({message:"Resume deleted from approved list"})
        }
        else{
            res.status(400).json({message : "resume not found, try again"})
        }

    }catch(err){ 
        res.status(400).json({message : "Try again to delete resume!"})
    }
}