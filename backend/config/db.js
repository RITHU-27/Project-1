const mongoose=require('mongoose');

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected"+process.env.PORT);
    } catch (error) {
    console.log("ERROR NAME:", error.name);
    console.log("ERROR CODE:", error.code);
    console.log(error);
}
};

module.exports=connectDB;