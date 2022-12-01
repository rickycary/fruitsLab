require('dotenv').config()
const mongoose = require("./connection")
const Fruit = require("./fruit")


mongoose.connection.on("open", () => {

    const startingFruits = [
        { name: "Orange", color: "orange", readyToEat: false },
        { name: "Grape", color: "purple", readyToEat: false },
        { name: "Banana", color: "orange", readyToEat: false },
        { name: "Strawberry", color: "red", readyToEat: false },
        { name: "Coconut", color: "brown", readyToEat: false },
        { name: "Cherry", color: "Red", readyToEat: true },
    ]

    // Delete all fruits
    // .remove is outdated. Use .deleteMany
    Fruit.deleteMany({}, (err, data) => {
        
    // Create New Fruits
        Fruit.create(startingFruits, (err, createdFruits) => {
            console.log(createdFruits)
        })
    })

})