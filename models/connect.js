const mongoose = require('mongoose');
//const { MongoClient } = require("mongodb");

async function connectDB(url) {
    // const client = new MongoClient(url);
    // await client.connect();
    // console.log("Successfully connected to Atlas");
    return mongoose.connect(url);
}

module.exports = {
    connectDB
}