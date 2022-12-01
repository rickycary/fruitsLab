require("dotenv").config(); // Load evn varialbes
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const PORT = process.env.PORT || 3000
const Fruit = require("./models/fruit");
const FruitRouter = require("./controllers/fruit")
const app = express();

//===========================
// Middleware
//===========================
app.use(morgan("tiny"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(FruitRouter)

// Listener 
app.listen(PORT, () => {
    console.log(`Who let the dogs out on port: ${PORT}`)
})