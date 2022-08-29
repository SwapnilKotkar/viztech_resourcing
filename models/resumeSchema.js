const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    mobile: {
        type: Number,
        required:true
    },
    resumeTitle: {
        type: String,
        required:true
    },
    resumeURL: {
        type: String,
        required:true
    },
    applyFor: {
        type: String,
        required:true
    },
    qual: {
        type: String,
        required:true
    },
    country: {
        type: String,
        required:true
    }
})


module.exports = mongoose.models.RESUMES || mongoose.model('RESUMES', resumeSchema);