require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
    console.log(error);
});

database.once("connected", () => {
    console.log("Database Connected");
});
const app = express();

app.use(express.json());

const Model = require("./model");

app.get("/", (req, res) => {
    res.send("Running...")
})

app.post("/register", async (req, res) => {
    try {
        const result = await Model.findOneAndUpdate(
            { mobile: req.body.mobile },
            {
                name: req.body.name,
                mobile: req.body.mobile,
                pincode: req.body.pincode,
            },
            { upsert: true }
        );
        return res.send("Succesfully saved.");
    } catch (err) {
        console.log(err);
        return res.status(500).send({ error: err });
    }
});


var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server Started at ${port}`);
});