const mongoose = require("mongoose");
require("dotenv").config;
const connectDB = async() => {
    const conn= await mongoose.connect("mongodb+srv://xxxx/mgmt_db");
    console.log(`DB connected status ${conn.connection.host}`)
}

module.exports = connectDB;
