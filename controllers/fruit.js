const express = require("express")
const Fruit = require("../models/fruit")

// Create router variable
const router = express.Router();

//===========================
// Routes
//===========================
router.get("/", (req, res) => {
    res.send("Server doing what it should be doing")
})

router.get("/fruits/seed", (req, res) => {
    // define data we want to put in the database
    
})

router.get("/fruits", (req, res) => {
    // Get all fruits from mongo and send them back
    Fruit.find({})
    .then((fruits) => {
        // res.json(fruits)
        res.render("fruits/index.ejs", { fruits });
    });
});

router.get("/fruits/new", (req, res) => {
    res.render("fruits/new.ejs")
})

router.post("/fruits", (req, res) => {
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false

    Fruit.create(req.body, (err, createdFruit) => {
        console.log("created", createdFruit, err)
        res.redirect("/fruits")
    })
})

router.get("/fruits/:id/edit", (req, res) => {

    const id = req.params.id
    // Find the fruit and send it to the edit.ejs to prepopulate the form
    Fruit.findById(id, (err, foundFruit) => {
        // res.json(foundFruit)
        res.render("fruits/edit.ejs", { fruit: foundFruit })
    })
})

router.put("/fruits/:id", (req, res) => {

    req.body.readyToEat = req.body.readyToEat === "on" ? true : false

    Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFruit) => {
        console.log(updatedFruit, err)
        res.redirect(`/fruits/${req.params.id}`)
    })
})

// show route
router.get("/fruits/:id", (req, res) => {
    // Go and get the fruit from the database
    Fruit.findById(req.params.id)
    .then((fruit) => {
        res.render("fruits/show.ejs", {fruit})
    })
})

router.delete("/fruits/:id", (req, res) => {

    Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
        console.log(err, deletedFruit)
        res.redirect("/fruits")
    })
})

//Export the router to use in other files 
module.exports = router