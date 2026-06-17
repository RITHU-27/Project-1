const mongoose = require("mongoose");
const dns = require("dns");

const connectDB = async () => {
  try {
    // Use public DNS servers
    dns.setServers(["8.8.8.8", "1.1.1.1"]);

    console.log("Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error");
    console.error("Name:", error.name);
    console.error("Code:", error.code);
    console.error("Message:", error.message);
  }
};

module.exports = connectDB;