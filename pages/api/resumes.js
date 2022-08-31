const { connectToDatabase } = require('../../lib/mongodb');

const Resume = require("../../models/resumeSchema")


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
        const resumes = await Resume.find();

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
    const { fullName, email, mobile, resumeTitle, resumeURL, applyFor, qual, country } = req.body

    if(!fullName|| !email || !mobile || !resumeTitle || !resumeURL || !applyFor || !qual || !country) {
        return res.status(422).json({ error: "please fill the data properly !"});
    }

    try{
        let { db } = await connectToDatabase();

        const resume = await db.collection('resumes').insertOne({ fullName, email, mobile, resumeTitle, resumeURL, applyFor, qual, country });

        if(resume){
        res.status(200).json({message : "Resume submitted successfully !"})
        }
        else{
            res.status(400).json({message : "Failed to submit resume !"})
        }

    }catch(err){ 
        res.status(400).json({message : "Try again to submit resume!"})
        console.log({err: err});
    }
}

