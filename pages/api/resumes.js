import connectDB from '../../db/connection'
import nc from "next-connect";
import config from "../../middleware/config";

const Resume = require("../../models/resumeSchema")
const handler = nc(config);

handler.post(async(req, res) => {
    const { fullName, email, mobile, resumeTitle, resumeURL, applyFor, qual, country } = req.body

    if(!fullName|| !email || !mobile || !resumeTitle || !resumeURL || !applyFor || !qual || !country) {
        return res.status(422).json({ error: "please fill the data properly !"});
    }

    try{
        const resume = new Resume({fullName, email, mobile, resumeTitle, resumeURL, applyFor, qual, country});
        await resume.save()
        res.status(200).json({message : "Resume submitted successfully !"})


    }catch(err){ 
        res.status(400).json({message : "Failed to submit resume !"})
        console.log({err: err});
    }

});

handler.get(async(req, res) => {
    try{
        const resumes = await Resume.find();
        if(resumes){
            res.status(200).json(resumes)   
        }
        else {
            res.staus(404).json({ message : "failed to fetch resumes !"})
        }
    }catch(err) {
        res.staus(400).json({error: err, message : "error in api/resumes"})
    }
})

export default handler;

