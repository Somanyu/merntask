const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 6,
        max: 30
    },
    lastName: {
        type: String,
        required: true,
        min: 6,
        max: 30
    },
    email: {
        type: String,
        required: true,
        min: 15,
        max: 30
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 10,
        max: 102
    },
    date: {
        type: Date,
        default: Date.now
    },
    profession: {
        type: String,
        required: true,
        min: 3,
        max: 30
    },
    about: {
        type: String,
        required: true,
        min: 20,
        max: 200
    }
});

module.exports = mongoose.model('User', userSchema);