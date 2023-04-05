const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    mobile: {
        required: true,
        type: String,
    },
    pincode: {
        required: true,
        type: String,
    },
    time: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Participant", dataSchema);