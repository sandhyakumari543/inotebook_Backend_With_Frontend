// models/UserDetails.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userdetailsSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userdetails'
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    education: {
        type: String,
    },
    project: {
        type: String,
    },
    achievements: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('UserDetails', userdetailsSchema);
