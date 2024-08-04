const mongoose = require("mongoose");

const modal = new mongoose.Schema({
    user: String,
    email: String,
    password: String
},
{
    collection: "users"
})

const user = new mongoose.model("user", modal);

module.exports = user;