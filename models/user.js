//===========================
// User Model 
//===========================
const { Schema, model } = mongoose // destructuring, grabbing model and Schema off mongoose variable 

const fruitsSchema = new Schema({
    name: String, 
    color: String,
    readyToEat: Boolean
})

const Fruit = model("Fruit", fruitsSchema)