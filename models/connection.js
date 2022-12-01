//===========================
// Database Connections
//===========================
require("dotenv").config(); // Load evn varialbes
const mongoose = require("mongoose") // gives us that db connection and cool methods for CRUD to the database 

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
} 

//===========================
// Establish Connections
//===========================
mongoose.connect(DATABASE_URL, CONFIG)

//===========================
// Log events from Mongoose
//===========================
mongoose.connection
    .on("open", ()=> console.log("Mongoose Connected"))
    .on("close", ()=> console.log("Disconnected from Mongoose"))
    .on("error", ()=> console.log(error))


// Export mongoose with connection to use in other files
module.exports = mongoose
