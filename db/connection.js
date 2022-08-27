const mongoose = require('mongoose')

const connectDB = mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(err));

export default connectDB;