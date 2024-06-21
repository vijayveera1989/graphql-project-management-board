const mongoose = require("mongoose");
require("dotenv").config;
const connectDB = async() => {
    const conn= await mongoose.connect("mongodb+srv://mgmt:mgmt@cluster0.llq5qle.mongodb.net/");
    console.log(`DB connected status ${conn.connection.host}`)
}

module.exports = connectDB;