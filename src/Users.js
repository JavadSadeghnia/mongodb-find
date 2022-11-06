const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    walletAddress: {
        type: String,
        minLength: 42,
        maxLength: 42,
        //immutable: true,
        required: true,
    },
    slackID: {
        type: String,
        minLength: 11,
        maxLength: 11,
        //immutable: true,
        required: true,
    },
})

module.exports = mongoose.model("User", userSchema)
